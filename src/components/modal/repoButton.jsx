import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import axios from 'axios';
import SkyLight from 'react-skylight';

const reps = {
  users: [
    {
      uid: Math.floor(Math.random() * 1000),
      user: 'Angels and Demons',
    },
    {
      uid: Math.floor(Math.random() * 1000),
      user: 'Angel',
    },
    {
      uid: Math.floor(Math.random() * 1000),
      user: 'Buffy The Vampire Slayer',
    },
  ],
};

class RepoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: '',
      render: false,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const { repos, render } = this.state;
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
    const { url } = this.props;
    const { repos } = this.state;
    console.log(reps);
    console.log(repos);
    return (
      <div>
        <section>
          <button className="button is-warning" type="button" onClick={() => this.simpleDialog.show()}>View Repo</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Hi, I'm a simple modal">
          <h1>Hello, I dont have any {url}.</h1>
          {reps.users.map(rep => (
            <p key={rep.uid}>{rep.uid}</p>
          ))}
          {/* {repos.map(repo => (
            <p key={repo.id}>{repo.id}</p>
          ))} */}
        </SkyLight>
      </div>
    );
  }
}

RepoButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RepoButton;
