// Function to toggle the sliding menu
function toggleMenu() {
    const slideMenu = document.getElementById("slide-menu");
    slideMenu.classList.toggle("open"); // Add or remove 'open' class to toggle visibility
}

// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections
    });
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block"; // Show the selected section
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const emergencyButton = document.getElementById("emergency-button");
    const buzzerSound = document.getElementById("buzzer-sound");
    const emergencyPopup = document.getElementById("emergency-popup");

    // Add event listener to the emergency button
    emergencyButton.addEventListener("click", function () {
        // Check if the buzzer is paused or playing
        if (buzzerSound.paused) {
            // Start playing the buzzer sound
            buzzerSound.play();
            emergencyButton.classList.add("active"); // Add active class to change button appearance
            
            // Show the emergency popup message
            emergencyPopup.style.display = "block";
        } else {
            // Stop the buzzer sound
            buzzerSound.pause();
            buzzerSound.currentTime = 0; // Reset sound to start
            emergencyButton.classList.remove("active"); // Remove active class to revert button appearance
            
            // Hide the emergency popup message
            emergencyPopup.style.display = "none";
        }
    });
});

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle("light-mode"); // Toggle the light mode class

    const toggleModeButton = document.getElementById("theme-toggle");
    if (document.body.classList.contains("light-mode")) {
        toggleModeButton.textContent = "Switch to Dark Mode";
    } else {
        toggleModeButton.textContent = "Switch to Light Mode";
    }

    // Update styles for the language select and buttons in light mode
    const languageSelect = document.querySelector('.language-options select');
    languageSelect.style.backgroundColor = document.body.classList.contains("light-mode") ? 'white' : '#333';
    languageSelect.style.color = document.body.classList.contains("light-mode") ? 'black' : 'white';
}

// Function to set the language based on user selection
function setLanguage(language) {
    const allElements = document.querySelectorAll('[data-lang]');
    allElements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === language ? 'block' : 'none';
    });
}

// Show settings when menu item clicked
function showSettings() {
    const settings = document.getElementById("settings");
    settings.style.display = "block"; // Show settings
    toggleMenu(); // Close the menu
}

// Function to show the about section
function showAbout() {
    alert("This app provides safety tips, emergency contacts, and self-defense information.");
}

// cyber crime page

 function handleComplaint(type) {
            // Add ripple effect
            const button = event.currentTarget;
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            // Show custom alert based on type
            if (type === 'financial') {
                alert('Financial Fraud Complaint Registration Initiated');
            } else if (type === 'cyber') {
                alert('Cyber Crime Complaint Registration Initiated');
            }
        }


 // Get elements
 const chatbotIcon = document.getElementById('chatbot-icon');
        const chatbotContainer = document.getElementById('chatbot-container');
        const closeButton = document.getElementById('close-btn');
        const chatbotIframe = document.getElementById('chatbot-iframe');

        // Generate a unique session parameter for iframe URL
        function setNewChatSession() {
            const baseURL = "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/27/17/20241027173858-3FIIHHLA.json";
            const sessionParam = `&session=${Date.now()}`; // Unique timestamp-based session ID
            chatbotIframe.src = baseURL + sessionParam; // Append parameter to URL
        }

        // Toggle chatbot visibility on icon click
        chatbotIcon.addEventListener('click', function() {
            chatbotContainer.style.display = 'block';
            chatbotIcon.style.display = 'none';
        });

        // Close chatbot on SVG click
        closeButton.addEventListener('click', function() {
            chatbotContainer.style.display = 'none';
            chatbotIcon.style.display = 'flex';
        });

        // Initialize chatbot session on page load
        setNewChatSession();

        document.addEventListener('DOMContentLoaded', () => {
            const profilePictureElement = document.getElementById('profilePicture');
            const userNameElement = document.getElementById('userName');
        
            // Retrieve user data from localStorage
            const userData = JSON.parse(localStorage.getItem('userCredentials'));
        
            if (userData) {
                userNameElement.textContent = userData.name; // Set user name
        
                // Set profile picture or initials
                if (userData.profilePicture) {
                    profilePictureElement.style.backgroundImage = `url(${userData.profilePicture})`;
                    profilePictureElement.textContent = ""; // Clear initials
                } else {
                    const initials = userData.name ? userData.name.slice(0, 2).toUpperCase() : "U";
                    profilePictureElement.textContent = initials; // Show initials if no picture
                    profilePictureElement.style.backgroundColor = "#ccc"; // Optional: Give a background color to initials
                    profilePictureElement.style.borderRadius = "50%"; // Make it circular
                    profilePictureElement.style.width = "50px"; // Set size for initials display
                    profilePictureElement.style.height = "50px"; // Set size for initials display
                    profilePictureElement.style.display = "flex"; // Flexbox to center initials
                    profilePictureElement.style.alignItems = "center"; // Center vertically
                    profilePictureElement.style.justifyContent = "center"; // Center horizontally
                    profilePictureElement.style.fontSize = "20px"; // Adjust font size
                    profilePictureElement.style.color = "#fff"; // Text color for initials
                }
            }
        });
        

