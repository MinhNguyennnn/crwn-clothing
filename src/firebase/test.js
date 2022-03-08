import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('I5nP9LDGLK4wsXR03Pou').collection('cartItems').doc('GXeFsRS7L38gmm3oSd7l')
firestore.doc('/users/I5nP9LDGLK4wsXR03Pou/cartItems/GXeFsRS7L38gmm3oSd7l');
firestore.collection('users/I5nP9LDGLK4wsXR03Pou/cartItems');