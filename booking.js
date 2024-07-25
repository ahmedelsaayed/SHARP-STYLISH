document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const time = document.getElementById('time').value;

    const phonePattern = /^01[0-5][0-9]{8}$/;


    if (username && phone && time) {
        alert(`Thanks ${username}. Your appointment has been booked at ${time}.`);
    } else {
        alert('Please fill out all fields.');
    }
    
});