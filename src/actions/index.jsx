const CREATE_USER = 'CREATE_USER';
const REMOVE_USER = 'REMOVE_USER';

const createUser = user => ({
  type: CREATE_USER,
  user,
});

const removeUser = user => ({
  type: REMOVE_USER,
  user,
});

export {
  CREATE_USER, REMOVE_USER, createUser, removeUser,
};
