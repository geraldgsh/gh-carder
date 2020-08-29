/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import axios from 'axios';
import SkyLight from 'react-skylight';

class RepoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: '',
    };
  }

  componentDidMount() {
    const { url } = this.props;
    axios(url)
      .then(response => {
        this.setState({
          repos: response.data,
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        });
      });
  }

  render() {
    const { repos } = this.state;
    const dialog = {
      maxHeight: '100%',
      marginTop: '-400px',
      marginLeft: '-35%',
      overflowY: 'scroll',
      position: 'fixed',
      width: '70%',
    };

    return (
      <div>
        <section>
          <button className="button is-warning mt-3" type="button" onClick={() => this.simpleDialog.show()}>View Repositories</button>
        </section>
        <SkyLight
          dialogStyles={dialog}
          hideOnOverlayClicked
          ref={ref => this.simpleDialog = ref}
        >
          <div className="container">
            <h2 className="title is-2 has-text-black">Public Repository</h2>
            <ul className="block-list is-small is-outlined is-success is-centered">
              {repos ? repos.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url} target={repo.html_url}>
                    {repo.full_name}
                  </a>
                </li>
              )) : null}
            </ul>
          </div>
        </SkyLight>
      </div>
    );
  }
}

RepoButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RepoButton;
