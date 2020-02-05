import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUOCDjOajlSzsBdmX9tV32k6sur9SIvlc",
    authDomain: "pizza-shop-391e7.firebaseapp.com",
    databaseURL: "https://pizza-shop-391e7.firebaseio.com",
    projectId: "pizza-shop-391e7",
    storageBucket: "pizza-shop-391e7.appspot.com",
    messagingSenderId: "988858915633",
    appId: "1:988858915633:web:c371161964cf4adcc3ae10",
    measurementId: "G-NVJ3EDNW8G"
};
firebase.initializeApp(config);
// firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;