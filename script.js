const changeCursorButton = document.getElementById('customCursor');
const bodyElement = document.getElementById('bodyElement');


document.addEventListener('DOMContentLoaded', (event) => {
    //get the button's element ID from index.html
    const button = document.getElementById('actionButton');

    // Add an event listener for clicking
    button.addEventListener('click', () => {
        // Display an alert 
        alert('Button clicked');
    });
});
document.getElementById('logs').addEventListener('click', function() {
    window.location.href = 'Logs.html'; // Redirects to logs 
  });
document.getElementById('comments').addEventListener('click', function() {
    window.location.href = 'Comments.html'; // Redirects to comments
  });

changeCursorButton.addEventListener('click', function() {
    bodyElement.classList.toggle('seal-cursor');
});

