/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/components.scss';

function UserProfile() {
  const [user, setUser] = useState([]);
  const currentUser = localStorage.username;
  useEffect(() => {
    axios(`https://api.github.com/users/${currentUser}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      <div className="rows columns is-centered is-gapless">
        <div className="row">
          <div className="column">
            <figure className="image is-128x128 pic">
              <img className="is-rounded" src={user.avatar_url} alt="profile pic" />
            </figure>
          </div>
        </div>
      </div>
      <div className="rows columns is-centered is-gapless">
        <div className="row">
          <div className="wording column has-text-centered">
            <h1 className="title has-text-black">{user.name}</h1>
            <h2 className="subtitle has-text-black">{user.company}</h2>
            <h3 className="subtitle has-text-black">{user.bio}</h3>
            <p className="paragraph-style">
              <strong>{user.followers}</strong>
              &nbsp;followers
            </p>
            <p className="paragraph-style">
              <strong>{user.following}</strong>
              &nbsp;following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
