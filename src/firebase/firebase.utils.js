import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzgQzfufYOtUbkMXGlPzQyVH4vEjQD12M",
    authDomain: "crwn-db-a07b9.firebaseapp.com",
    projectId: "crwn-db-a07b9",
    storageBucket: "crwn-db-a07b9.appspot.com",
    messagingSenderId: "1078007079644",
    appId: "1:1078007079644:web:7478952eaa07319a200a19",
    measurementId: "G-MEDMGH6S9P"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    console.log('dmcs', snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;