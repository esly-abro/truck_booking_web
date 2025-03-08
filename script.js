// User Login Form Submission
document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('User login successful! Redirecting to dashboard...');
    window.location.href = 'user-dashboard.html';
});

// Driver Login Form Submission
document.getElementById('driverLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Driver login successful! Redirecting to dashboard...');
    window.location.href = 'driver-dashboard.html';
});

// Add Journey Form Submission
document.getElementById('addJourneyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Journey added successfully!');
    window.location.href = 'driver-dashboard.html';
});