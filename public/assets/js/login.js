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

function login(){
	
	var userEmail = document.getElementById('mail').value;
	var passWord = document.getElementById('pass').value;
	
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
	/*firebase.auth().signInWithEmailAndPassword(userEmail, passWord).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
		window.alert("Error :" + errorMessage);
	  // ...
	});
*/
