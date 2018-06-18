var config = {
    apiKey: "AIzaSyCdg01I5e6zcfXEnHdcIBFAv-dA6HTdoKY",
    authDomain: "contactus-f4329.firebaseapp.com",
    databaseURL: "https://contactus-f4329.firebaseio.com",
    projectId: "contactus-f4329",
    storageBucket: "contactus-f4329.appspot.com",
    messagingSenderId: "125503052614"
  };
  firebase.initializeApp(config);

// firebase object we use for storage:
var myDataRef = new Firebase('text');

$('form.modalForm').submit(function() {
		// validate the comment form when it is submitted
		$("#contactForm").validate({
      submitHandler: function(form) {
          // store form fields in variables:
          var name = $('#name').val();
          var mail = $('#mail').val();
          var phone= $('#phone').val();
          var subject = $('#sub').val();
			   	var message = $('#msg').val();
          // send the data to the database:
          myDataRef.push({name: name, mail: mail, phone:phone, subject: subject, message:message; });  
        
          // clear the input fields:
          $('label ~ input[name!=""]').val('');
          $('textarea').val('');
        
          // say thanks
          alert("Thanks for your comment!");
      }
    });
});


/*

	var name = document.getElementById("name");
	var email = document.getElementById("mail");
	var Phone = document.getElementById("phone");
	var subject = document.getElementById("sub");
	var message = document.getElementById("msg");
function myFunction() {

    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;
    firebaseRef.child("Text").set(messageText);

}


//code elfirebase
/*var config = {
    apiKey: "AIzaSyCdg01I5e6zcfXEnHdcIBFAv-dA6HTdoKY",
    authDomain: "contactus-f4329.firebaseapp.com",
    databaseURL: "https://contactus-f4329.firebaseio.com",
    projectId: "contactus-f4329",
    storageBucket: "contactus-f4329.appspot.com",
    messagingSenderId: "125503052614"
  };
  firebase.initializeApp(config);
firebase.auth().signInAnonymously().catch(function(error) {
});

jQuery(document).ready(function ($) {
  "use strict";
  
  $('form.modalForm').submit(function () {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('textarea').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').show('blind');
      }
    });
    if (ferror) { return false; }
    var name = $('#modal-window-container').find("#name").val();
    var email = $('#modal-window-container').find("#mail").val();
    var phone = $('#modal-window-container').find("#phone").val();
    var subject = $('#modal-window-container').find("#sub").val();
    var message = $('#modal-window-container').find("#msg").val();
  
    var data = {
      name: name,
      email: email,
      phone: phone,
      subject:subject,
      message:message
    };
    var onMessageComplete = function (error) {
      $('#modal-window-container').find("#iosSubmit").prop('disabled', false);
      if (error) {
        $('#modal-window-container').find("#sendmessage").removeClass("show");
        $('#modal-window-container').find("#errormessage").addClass("show");
        
      } else {
        $('#modal-window-container').find("#sendmessage").addClass("show");
        $('#modal-window-container').find("#errormessage").removeClass("show");
        $('#modal-window-container').find("input, textarea").val("");
      }
    };
    var ref = firebase.database().ref().child("contactus").child(today.getTime()).set(data, onMessageComplete);
    $('#modal-window-container').find("#iosSubmit").prop('disabled', true);
    return false;
  });

});*/
