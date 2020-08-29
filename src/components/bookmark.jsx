import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import RepoButton from './modal/repoButton';
import OrgButton from './modal/orgButton';
import '../styles/components.scss';

config.autoAddCss = false;
library.add(fab);

function Bookmark() {
  const users = useSelector(state => state.users);
  return (
    <div id="list" className="card-container">
      {users.map(user => (
        <div className="card" key={user.uid}>
          <div className="card-image">
            <div className="avatar-header">
              <div className="container has-text-centered">
                <div className="column pale">
                  <br />
                  <div className="boxster">
                    <figure className="avatar image is-128x128">
                      <img src={user.user.avatar_url} alt="profile-pic" />
                    </figure>
                    <form>
                      <div className="user-meta has-text-centered">
                        <a href={user.user.html_url} target={user.user.html_url}>
                          <i>
                            <FontAwesomeIcon icon={['fab', 'github-square']} width="18" />
                          </i>
                        </a>
                        <h3 className="username">{user.user.name}</h3>
                        <h5 className="position">{user.user.bio}</h5>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="desc is-capitalized">
              <RepoButton url={user.user.repos_url} />
              <OrgButton url={user.user.organizations_url} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bookmark;
