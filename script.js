// Function to spin the wheel
function spinWheel() {
    const wheel = document.getElementById('wheel');
    const randomRotation = Math.floor(Math.random() * 3600) + 720; // Random rotation between 720 and 4320 degrees
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Open pop-up after the spin is complete
    setTimeout(openPopup, 4000); // Adjust delay to match spin duration
}




// Function to open the pop-up
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Attach event listeners
document.getElementById('spinButton').addEventListener('click', spinWheel);
document.getElementById('closePopup').addEventListener('click', closePopup);

// Close the popup if the user clicks outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
});

// Function to spin the wheel
function spinWheel() {
    const wheel = document.getElementById('wheel');
    const randomRotation = Math.floor(Math.random() * 3600) + 720; // Random rotation between 720 and 4320 degrees
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Open pop-up after the spin is complete
    setTimeout(openPopup, 4000); // Adjust delay to match spin duration
}

// Function to open the pop-up
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Attach event listeners
document.getElementById('spinButton').addEventListener('click', spinWheel);
document.getElementById('closePopup').addEventListener('click', closePopup);

// Close the popup if the user clicks outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
});


// Function to spin the wheel
function spinWheel() {
    const wheel = document.getElementById('wheel');
    const randomRotation = Math.floor(Math.random() * 3600) + 720; // Random rotation between 720 and 4320 degrees
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Open pop-up after the spin is complete
    setTimeout(openPopup, 4000); // Adjust delay to match spin duration
}

// Function to open the pop-up
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Attach event listeners
document.getElementById('spinButton').addEventListener('click', spinWheel);
document.getElementById('closePopup').addEventListener('click', closePopup);

// Close the popup if the user clicks outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
});





if()
const tasks = [
    { color: '#6c98d5', task: 'Catch the wind' },
    { color: '#FFA07A', task: 'Teach a fish to swim' },
    { color: '#FFD700', task: 'Be invisible' },
    { color: '#737ca0', task: 'Fly a kite on Mars' },
    { color: '#78cf78', task: 'Travel to the moon on a paper plane' },
    { color: '#348e79', task: 'Count the stars' },
    { color: '#bc589e', task: 'Hug the cloud' },
    { color: '#ce99cc', task: 'Touch the rainbow' },
];

function showPopupForColor(color) {
    // Find the task that matches the color
    const task = tasks.find(task => task.color === color);

    // Update popup text with the found task
    if (task) {
        document.getElementById("popupTask").innerHTML = task.task;
    } else {
        document.getElementById("popupTask").innerHTML = "No task found!";
    }

    // Show the popup
    document.getElementById("popup").style.display = "block";
}

// Close the popup when the close button is clicked
document.getElementById("closePopup").onclick = function() {
    document.getElementById("popup").style.display = "none";
};

// Example usage: Call showPopupForColor('#FFA07A') when the wheel stops
