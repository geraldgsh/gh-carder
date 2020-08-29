import React, { Component } from 'react';
import { signInWithGitHub } from '../helpers/auth';
import Logo from '../images/GitHub-Mark-120px-plus.png';
import '../styles/login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">House of GitHub Cards</h3>
                <p className="subtitle has-text-grey">Please sign in to proceed.</p>
                <div className="box">
                  <figure className="avatar">
                    <img src={Logo} alt="GH logo" />
                  </figure>
                  <form>
                    {error ? (
                      <p className="text-danger">{error}</p>
                    ) : null}
                    <button
                      className="button is-block is-info is-large is-fullwidth"
                      type="button"
                      onClick={this.githubSignIn}
                    >
                      Sign in with GitHub
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
