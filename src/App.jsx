/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { auth } from './services/firebase';
import Login from './containers/login';
import Main from './containers/main';
import './styles/App.scss';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (authenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      ))}
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (authenticated === false ? (
        <Component {...props} />
      ) : (
        <Redirect to="/main" />
      ))}
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }

  render() {
    const { loading } = this.state;
    const { authenticated } = this.state;
    return loading === true ? (
      <div className="is-primary is-loading" role="status">
        <span className="is-sr-only">Loading...</span>
      </div>
    ) : (
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/"
            authenticated={authenticated}
            component={Login}
          />
          <PrivateRoute
            path="/main"
            authenticated={authenticated}
            component={Main}
          />
        </Switch>
      </Router>
    );
  }
}

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

PublicRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default App;