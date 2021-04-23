//import logo from './logo.svg';
import './App.css';
//import bean from './bean.pdf';

import firebase from 'firebase';
import beanLogo from './beanpng.png';

import Button from 'react-bootstrap/Button';

const firebaseConfig = {
  apiKey: "AIzaSyA4FNIzGyA8yIxut9EpRkzeLdQCjxk9t4A",
  authDomain: "brobeans-website.firebaseapp.com",
  projectId: "brobeans-website",
  storageBucket: "brobeans-website.appspot.com",
  messagingSenderId: "1095290109733",
  appId: "1:1095290109733:web:9f26a5872174cc8ed4a4cc",
  measurementId: "G-TLHBW5ZHQT"
};

// this checks to make sure we are not running a firebase instance at the moment so we can initialize
if (firebase.apps.length === 0) {
  // initializes firebase
  firebase.initializeApp(firebaseConfig);
}

//export default firebase;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={beanLogo} alt="logo" height="700" />
        <p>
       
        </p>
        <p>
          EST. 2021
        </p>

       
      </header>
      
    </div>
  );
}

export default App;

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA4FNIzGyA8yIxut9EpRkzeLdQCjxk9t4A",
    authDomain: "brobeans-website.firebaseapp.com",
    projectId: "brobeans-website",
    storageBucket: "brobeans-website.appspot.com",
    messagingSenderId: "1095290109733",
    appId: "1:1095290109733:web:9f26a5872174cc8ed4a4cc",
    measurementId: "G-TLHBW5ZHQT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/

