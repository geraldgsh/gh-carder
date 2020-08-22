import React from 'react';
import Logo from '../images/GitHub-Mark-120px-plus.png';
import '../styles/login.scss';

function Login() {
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
                  <button className="button is-block is-info is-large is-fullwidth" type="button">Sign in with GitHub</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
