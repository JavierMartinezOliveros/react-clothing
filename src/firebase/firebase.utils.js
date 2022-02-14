import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAWFEDbyvbqV_O0IbgNFiZEiKfl11XgW7U",
    authDomain: "crwd-bd.firebaseapp.com",
    databaseURL: "https://crwd-bd.firebaseio.com",
    projectId: "crwd-bd",
    storageBucket: "crwd-bd.appspot.com",
    messagingSenderId: "460045763195",
    appId: "1:460045763195:web:7b64aa615fe2d9160b98de"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
    }

    return userRef;

};


export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
