// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the new GIF and message
        });
    } else if (option === 'no') {
        // Make the "No" button run away
        moveNoButton();
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to make the "No" button run away
function moveNoButton() {
    var noButton = document.getElementById('no-button');
    var container = document.getElementById('container');
    var containerRect = container.getBoundingClientRect();
    var buttonRect = noButton.getBoundingClientRect();

    // Calculate random position within the container
    var newX = Math.random() * (containerRect.width - buttonRect.width);
    var newY = Math.random() * (containerRect.height - buttonRect.height);

    // Move the button to the new position
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the new GIF instead of cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'https://media.tenor.com/z_31IpFKgt4AAAAj/anniversary-happyanniversary.gif'; // New GIF link
    catHeartImage.alt = 'Anniversary GIF';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        
        // Create the text message
        var message = document.createElement('p');
        message.textContent = "I love you so much, and I'm so happy that you're gonna be my Valentine! 💖 I'll choose you to be my Valentine any year and in any life. I just love you a lot! Muaaaaaaaaaaaaaaaaah! 😘";
        
        // Apply love-letter font and style
        message.style.fontFamily = '"Dancing Script", cursive'; // Love-letter font
        message.style.fontSize = '30px'; // Larger text size
        message.style.color = 'red'; // Red text color
        message.style.textAlign = 'center'; // Center the message
        message.style.marginTop = '10px'; // Space between the GIF and message
        
        // Append the message below the GIF
        imageContainer.appendChild(message);
        
        document.getElementById('options').style.display = 'none'; // Hide the options container
    };
}

// Display the cat.gif initially
displayCat();
