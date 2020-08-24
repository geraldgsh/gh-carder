const SIGNEDIN = username => ({
  type: 'SIGNEDIN',
  username,
});
const SIGNEDOUT = () => ({ type: 'SIGNEDOUT' });

export { SIGNEDIN, SIGNEDOUT };
