import React, { Component } from 'react';
import { auth } from '../services/firebase';
import '../styles/main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: <Bookmark />,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="home">
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Welcome to Chatty</h1>
              <p className="lead">A great place to share your thoughts with friends</p>
              <button className="btn btn-primary mr-3" onClick={() => auth().signOut()}>Logout</button>
            </div>
          </div>
        </section>
      </div>
    );
  }  
}

export default Main;
