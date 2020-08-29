import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import { createUser } from '../actions/index';

function SearchBar() {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    axios(`https://api.github.com/users/${user}`)
      .then(response => {
        dispatch(createUser({ uid: response.data.id, user: response.data }));
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        });
      });
    setUser('');
  };

  return (
    <div className="column social-media">
      <form className="field has-addons" onSubmit={e => handleSubmit(e)}>
        <div className="row">
          <input
            className="input"
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="GitHub username"
            required
          />
        </div>
        <div className="row">
          <button className="button is-info" type="submit" value="Submit">
            Add card
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
