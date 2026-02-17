// A simple function
document.addEventListener('DOMContentLoaded', (event) => {
    //get the button's element ID
    const button = document.getElementById('actionButton');

    // Add an event listener for clicking
    button.addEventListener('click', () => {
        // Display an alert 
        alert('Button clicked');
    });
});
document.getElementById('logs').addEventListener('click', function() {
    window.location.href = 'Logs.html'; // Redirects to Logs.html in the same directory
  });
