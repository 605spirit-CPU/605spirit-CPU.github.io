// A simple function to be executed when the DOM is ready
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button element by its ID
    const button = document.getElementById('actionButton');

    // Add an event listener for the 'click' event
    button.addEventListener('click', () => {
        // Display an alert dialog
        alert('Button was clicked!');
    });
});
