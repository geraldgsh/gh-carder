/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../styles/main.scss';

import Bookmark from '../components/bookmark';
import SearchBar from '../components/searchBar';
import { logOut } from '../helpers/auth';
import Followers from '../components/followers';
import Following from '../components/following';
import UserProfile from '../components/userProfile';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: <Bookmark />,
      search: <SearchBar />,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const sector = e.target.value;
    if (sector === 'Following') {
      this.setState(() => ({
        section: <Following />,
        search: '',
      }));
    } else if (sector === 'Followers') {
      this.setState(() => ({
        section: <Followers />,
        search: '',
      }));
    } else {
      this.setState(() => ({
        section: <Bookmark />,
        search: <SearchBar />,
      }));
    }
  }

  async signOff() {
    try {
      await logOut();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { error } = this.state;
    const sector = this.state.section;
    const searchArea = this.state.search;
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-centered is-mobile">
              <div className="boxer">
                <div className="columns is-gapless">
                  <div className="sidebar column is-3">
                    <UserProfile />
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
                            {error ? (
                              <p className="text-danger">{error}</p>
                            ) : null}
                            <div className="column buttons">
                              <button className="button is-danger is-fullwidth" type="button" onClick={this.signOff}>Logout</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rows columns is-centered is-gapless">
                      <div className="container is-fluid">
                        <div className="column">
                          <div className="row">
                            {searchArea}
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
