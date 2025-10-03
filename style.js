document.querySelector(".footer-contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a confirmation alert
    alert(`Thank you, ${name}! Your message has been received. We will respond to ${email} shortly.`);

    // Optionally, reset the form fields
    event.target.reset();
  });