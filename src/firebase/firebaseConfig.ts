import firebase from 'firebase/app'


const firebaseConfig = {
   apiKey: 'AIzaSyDqY2vFKv53Lxu03TMAlbymliXsElKndSE',
   authDomain: 'mobileapp-29255.firebaseapp.com',
   projectId: 'mobileapp-29255',
   storageBucket: 'mobileapp-29255.appspot.com',
   messagingSenderId: '13666669567',
   appId: '1:13666669567:web:d972747fa7dda968310dca',
   measurementId: 'G-5H1W2PBGG3',
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase