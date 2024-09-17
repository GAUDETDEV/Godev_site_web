/*
*
* Contact JS
*/
/* $(function() { */
    // Get the form.
/*     var form = $('#ajax_contact'); */

    // Get the messages div.
/*     var formMessages = $('#form-messages'); */

    // Set up an event listener for the contact form.
/* 	$(form).submit(function(event) { */
		// Stop the browser from submitting the form.
/* 		event.preventDefault(); */

		// Serialize the form data.
/* 		var formData = $(form).serialize(); */
		// Submit the form using AJAX.
/* 		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}) */
	/* 	.done(function(response) { */
			// Make sure that the formMessages div has the 'success' class.
/* 			$(formMessages).removeClass('alert-danger');
			$(formMessages).addClass('alert-success'); */

			// Set the message text.
/* 			$(formMessages).text(response); */

			// Clear the form.
/* 			$('#fullname').val('');
			$('#email').val('');
			$('#phone').val('');
			$('#message').val('');
		})
		.fail(function(data) { */
			// Make sure that the formMessages div has the 'error' class.
/* 			$(formMessages).removeClass('alert-success');
			$(formMessages).addClass('alert-danger');
 */
			// Set the message text.
/* 			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

}); */


var form = document.getElementById("my-form");
  
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");

var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
	  'Accept': 'application/json'
  }
}).then(response => {
  if (response.ok) {
	status.innerHTML = "Message envoyé avec succès!";
	form.reset()
  } else {
	response.json().then(data => {
	  if (Object.hasOwn(data, 'errors')) {
		status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
	  } else {
		status.innerHTML = "Oups ! Un problème est survenu lors de l'envoi de votre formulaire"
	  }
	})
  }
}).catch(error => {
  status.innerHTML = "Oups ! Un problème est survenu lors de l'envoi de votre formulaire"
});
}
form.addEventListener("submit", handleSubmit)