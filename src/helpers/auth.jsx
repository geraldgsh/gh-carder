import { auth } from '../services/firebase';

export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  auth().signInWithPopup(provider)
    .then(result => {
      localStorage.setItem('username', result.additionalUserInfo.username);
    });
}

export function logOut() {
  return auth().signOut()
    .then(localStorage.clear());
}
