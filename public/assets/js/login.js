firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	  var user = firebase.auth().currentUser;
	  if(user != null){
		  window.alert("hhgjhgjjhg");
	  }
  } else {
    // No user is signed in.
  }
});

jQuery(document).ready(function ($) {
  "use strict";
  $('form.modalForm').submit(function () {
    var userEmail = $('#modal-window-container').find("#mail").val();
    var passWord = $('#modal-window-container').find("#pass").val();
		firebase.auth().signInWithEmailAndPassword(userEmail, passWord)
    .catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  if (errorCode === 'auth/wrong-password') {
		alert('Wrong password.');
	  } else {
		alert(errorMessage);
	  }
	  console.log(error);
	});
	return false;
	});
});
