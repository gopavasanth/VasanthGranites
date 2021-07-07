// Initialize Firebase (ADD YOUR OWN DATA)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAuKMoth0d3-nestWH6fIH5mskB5WmZmaA",
    authDomain: "vasanth-granites.firebaseapp.com",
    databaseURL: "https://vasanth-granites-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vasanth-granites",
    storageBucket: "vasanth-granites.appspot.com",
    messagingSenderId: "821073954922",
    appId: "1:821073954922:web:b6b9ed14460dfb02a62213",
    measurementId: "G-KB746TV18J"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  console.log(name, phone, message);

  // Save message
  saveMessage(name, phone, message);

  // Clear form
  document.getElementById('contact').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    message:message
  });
}