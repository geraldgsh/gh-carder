import { CREATE_USER, REMOVE_USER } from '../actions/index';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.user];
    case REMOVE_USER:
      return state.filter(user => user.id !== action.user.id);
    default:
      return state;
  }
};

export default userReducer;
