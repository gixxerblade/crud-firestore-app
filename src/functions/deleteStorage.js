import firebase from 'firebase';
//import firestore from 'firebase/firestore'

const deleteStorage = (id, collection) => {
    firebase
      .firestore()
      .collection(collection)
      .doc(id)
      .delete()
}
export default deleteStorage