document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission for demonstration purposes

    // Collecting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        
        // You can handle form submission here, e.g., send data to a server
    }
});
