document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contact-form');

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		const formData = new FormData(form);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message')
		};

		console.log('Form Data:', data); // Log the data being sent

		emailjs.send('service_y5hzndu', 'template_jt4j086', data)
			.then(function (response) {
				console.log('Email sent successfully!', response); // Log success
				alert('Email sent successfully!');
				form.reset();
			}, function (error) {
				console.error('EmailJS error:', error); // Log the full error
				if (error.status === 412) {
					alert('Failed to send email due to precondition failure. Please check your input and try again.');
				} else {
					alert('Failed to send email. Please try again later.');
				}
			});
	});
});