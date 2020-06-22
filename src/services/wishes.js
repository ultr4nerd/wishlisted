import axios from 'axios';
import * as firebase from 'firebase';
import 'firebase/firestore';

const client = axios.create({
  baseURL: 'https://wishlisted.herokuapp.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

async function searchWish(url) {
  const { data } = await client.get('/', { params: { url } });
  return data;
}

async function getWishes(userUid) {
  const db = firebase.firestore();
  const snapshot = await db
    .collection('wishes')
    .where('user', '==', userUid)
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

async function createWish(wish, userUid) {
  const db = firebase.firestore();
  await db.collection('wishes').add({
    ...wish,
    user: userUid
  });
}

async function deleteWish(wishId) {
  const db = firebase.firestore();
  await db
    .collection('wishes')
    .doc(wishId)
    .delete();
}

export default { searchWish, getWishes, createWish, deleteWish };
