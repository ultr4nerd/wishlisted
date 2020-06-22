import * as firebase from 'firebase/app';
import 'firebase/auth';

async function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    return {
      token: result.credential.accessToken,
      user: result.user
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

async function logout() {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw new Error(error.message);
  }
}

export default { login, logout };
