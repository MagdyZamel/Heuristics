$(function(){
var config = {
    apiKey: "AIzaSyCdg01I5e6zcfXEnHdcIBFAv-dA6HTdoKY",
    authDomain: "contactus-f4329.firebaseapp.com",
    databaseURL: "https://contactus-f4329.firebaseio.com",
    projectId: "contactus-f4329",
    storageBucket: "contactus-f4329.appspot.com",
    messagingSenderId: "125503052614"
  };
  firebase.initializeApp(config);

	$('#sendmessage').addClass('hidden');
  $('.modalForm').on('submit', event => {
		event.preventDefault();
		const name = $('#name').val();
		const mail = $('#mail').val();
		const phone = $('#phone').val();
		const subject = $('#sub').val();
		const message = $('#msg').val();
	
		console.log(name, mail, phone, subject, message);
		firebase.database().ref('Users').push({
			name,
			mail,
			phone,
			subject,
			message
		});
		$('.modalForm').trigger('reset');
		$('#sendmessage').removeClass('hidden');
		$('.modalForm').addClass('hidden');
	
	});
	
});