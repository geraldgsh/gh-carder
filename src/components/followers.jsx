/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../styles/components.scss';

config.autoAddCss = false;
library.add(fab);

const currentUser = localStorage.username;

function Followers() {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    axios(`https://api.github.com/users/${currentUser}/followers`)
      .then(response => {
        setFollowers(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  return (
    <div id="list" className="card-container">
      {followers.slice(0, 6).map(follower => (
        <div className="card" key={follower.id}>
          <div className="card-image">
            <div className="avatar-header">
              <div className="container has-text-centered">
                <div className="column pale">
                  <br />
                  <div className="boxster">
                    <figure className="avatar image is-128x128 pic">
                      <img src={follower.avatar_url} alt="GH logo" />
                    </figure>
                    <form>
                      <div className="user-meta has-text-centered">
                        <a href={follower.html_url} target={follower.html_url}>
                          <i>
                            <FontAwesomeIcon icon={['fab', 'github-square']} width="18" />
                          </i>
                        </a>
                        <h3 className="username">{follower.login}</h3>
                        <h5 className="position">Followers</h5>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="desc is-capitalized">
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Followers;
