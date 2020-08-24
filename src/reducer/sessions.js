const sessionReducer = (state = { siginin: false, username: '' }, action) => {
  switch (action.type) {
    case 'SIGNEDIN':
      return { login: true, username: action.username };
    case 'SIGNEDOUT':
      return { login: false, username: '' };
    default:
      return state;
  }
};

export default sessionReducer;
