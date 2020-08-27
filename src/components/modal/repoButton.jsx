import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import axios from 'axios';
import SkyLight from 'react-skylight';

class RepoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: '',
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const { repo } = this.state;
    axios(url)
      .then(response => {
        this.setState({
          repo: response.data,
        });
        console.log(response.data);
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
    const { repo, url } = this.props;
    return (
      <div>
        <section>
          <button className="button is-warning" type="button" onClick={() => this.simpleDialog.show()}>View Repo</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Hi, I'm a simple modal">
          <h1>Hello, I dont have any {url}.</h1>
          <p>{repo}</p>
        </SkyLight>
      </div>
    );
  }
}

RepoButton.propTypes = {
  url: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default RepoButton;
