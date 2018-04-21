(function() {
	
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3IYTqyDFky-d4I-8Y-SHjrjoRbzxhhLA",
    authDomain: "login-15f96.firebaseapp.com",
    databaseURL: "https://login-15f96.firebaseio.com",
    projectId: "login-15f96",
    storageBucket: "login-15f96.appspot.com",
    messagingSenderId: "10951786259"
  };
  firebase.initializeApp(config);
 
	var  mail=document.getElementById('mail');
	var pass=document.getElementById('pass');
	const btn=document.getElementById('btn');

	btn.addEventListener('click',e=>{
    const email=mail.value;
   const password=pass.value;
	const auth=firebase.auth();
   var r= auth.signInWithEmailAndPassword(email,password);
	r.catch(e=>console.log(e.message) );
	console.log(r);
	var user = firebase.auth().currentUser;

		if (user) {
			 window.alert("hello");
		}
		else {
					  window.alert("3'lt walhi");
	   		}
           
 
  });
    // kolo d mcht3'lch
	
	/*
	function Login() {
  ...
  // Do whatever DOM operations you need to show the login/registration box.
  $("#loginBtn").on("click", function() {
    authClient.login("password", {
      email: $("#email").val(),
      password: $("#pass").val(),
      rememberMe: $("#rememberCheckbox").val()
    });
  });
}
	btnLogin.addEventListener('click', e=>{
		var email = userEmail.value;
		var pass = userPass.value;
	 firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	});
	
	
			// code el-auth. mn elfirebase 
		firebase.auth().onAuthStateChanged(function(login) {
		  if (user) {
			// User is signed in.
			  console.log(user);
			  console.log(user.email);
			 
		  } else {
			// No user is signed in.
		  }
		});

*/	
	
}());

	
	
	

/*

// onclick button

function Login() {
	
	var userEmail = document.getElementById("email").value;
	var userPass = document.getElementById("pass").value;
	
	  firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
	firebase.auth().onAuthStateChanged(firebaseUser => { });
	
} /*
$("#loginBtn").click{
	function(){
		
		var email = $("#email").val();
		var passWod = $("#pass").val();
		firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
		$("#loginError").show().text(error.message);
	
	  // ...
	});
	}
	
	
} 