/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../styles/components.scss';

config.autoAddCss = false;
library.add(fab);

function Following() {
  const currentUser = localStorage.username;
  const [followings, setFollowers] = useState([]);
  useEffect(() => {
    axios(`https://api.github.com/users/${currentUser}/following`)
      .then(response => {
        setFollowers(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  return (
    <div id="list" className="card-container">
      {followings.slice(0, 6).map(following => (
        <div className="card" key={following.id}>
          <div className="card-image">
            <div className="avatar-header">
              <div className="container has-text-centered">
                <div className="column pale">
                  <br />
                  <div className="boxster">
                    <figure className="avatar image is-128x128 pic">
                      <img src={following.avatar_url} alt="GH logo" />
                    </figure>
                    <form>
                      <div className="user-meta has-text-centered">
                        <a href={following.html_url} target={following.html_url}>
                          <i>
                            <FontAwesomeIcon icon={['fab', 'github-square']} width="18" />
                          </i>
                        </a>
                        <h3 className="username">{following.login}</h3>
                        <h5 className="position">Following</h5>
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

export default Following;
