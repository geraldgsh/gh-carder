/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { auth } from '../services/firebase';
import '../styles/main.scss';

import { Bookmark, SearchBar } from '../components/bookmark';
import Followers from '../components/followers';
import Following from '../components/following';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: <Bookmark />,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const sector = e.target.value;
    if (sector === 'Following') {
      this.setState(() => ({
        section: <Following />,
      }));
    } else if (sector === 'Followers') {
      this.setState(() => ({
        section: <Followers />,
      }));
    } else {
      this.setState(() => ({
        section: <Bookmark />,
      }));
    }
  }

  render() {
    const sector = this.state.section;
    let search;
    if (sector.type.name === 'Bookmark') {
      search = <SearchBar />;
    } else {
      search = null;
    }
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-centered is-mobile">
              <div className="boxer">
                <div className="columns is-gapless">
                  <div className="sidebar column is-3">
                    <div className="rows columns is-centered is-gapless">
                      <div className="row">
                        <div className="column">
                          <figure className="image is-128x128 pic">
                            <img className="is-rounded" src="https://avatars3.githubusercontent.com/u/29500109?v=4" alt="profile pic" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="rows columns is-centered is-gapless">
                      <div className="row">
                        <div className="wording column has-text-centered">
                          <h1 className="title has-text-black">Gerald Goh</h1>
                          <h2 className="subtitle has-text-black">Full Stack Developer</h2>
                        </div>
                      </div>
                    </div>
                    <div className="rows columns is-centered is-gapless">
                      <div className="container is-fluid">
                        <div className="column">
                          <div className="row">
                            <div className="column buttons" value="example" role="presentation" onClick={e => this.handleClick(e, 'value')}>
                              <button value="Bookmark" name="Bookmark" id="#bookmark" className="button is-primary is-fullwidth" type="button">
                                Bookmark
                              </button>
                              <button value="Followers" name="Followers" id="#followers" className="button is-link is-fullwidth" type="button">
                                Followers
                              </button>
                              <button value="Following" name="Following" id="#following" className="button is-success is-fullwidth" type="button">
                                Following
                              </button>
                            </div>
                            <div className="column buttons">
                              <button className="button is-danger is-fullwidth" type="button" onClick={() => auth().signOut()}>Logout</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rows columns is-centered is-gapless">
                      <div className="container is-fluid">
                        <div className="column">
                          <div className="row">
                            {search}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-9">
                    {sector}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
