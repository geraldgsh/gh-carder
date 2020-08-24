import { auth } from '../services/firebase';

export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  auth().signInWithPopup(provider)
    .then(result => {
      console.log(result.additionalUserInfo.username);
    });
}

export function logout() {
  return auth().signOut();
}
