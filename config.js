import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDu-cmezlqWs9Y7lfmfwqAbV44iwAUfkm8",
    authDomain: "seniorcitizenapp-7f1bd.firebaseapp.com",
    projectId: "seniorcitizenapp-7f1bd",
    storageBucket: "seniorcitizenapp-7f1bd.appspot.com",
    messagingSenderId: "308298213314",
    appId: "1:308298213314:web:be5b59a8eec5163130d85b"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore()