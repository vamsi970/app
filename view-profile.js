document.addEventListener('DOMContentLoaded', () => {
    const profilePictureElement = document.getElementById('profilePicture');
    const userNameElement = document.getElementById('userName');
    const userEmailElement = document.getElementById('userEmail');

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userCredentials'));

    if (userData) {
        userNameElement.textContent = userData.name;
        userEmailElement.textContent = userData.email;

        // Display profile picture or initials
        if (userData.profilePicture) {
            profilePictureElement.style.backgroundImage = `url(${userData.profilePicture})`;
            profilePictureElement.textContent = ""; // Clear initials
        } else {
            const initials = userData.name ? userData.name.slice(0, 2).toUpperCase() : "U";
            profilePictureElement.textContent = initials;
        }
    } else {
        alert('No user data found. Please log in.');
        window.location.href = 'login.html'; // Redirect to login if no user data
    }

    // Update Profile Picture
    document.getElementById('updateProfilePicture').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });

    document.getElementById('fileInput').addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const profilePictureURL = e.target.result;

                profilePictureElement.style.backgroundImage = `url(${profilePictureURL})`;
                profilePictureElement.textContent = ""; // Remove initials

                // Save the uploaded picture to localStorage
                userData.profilePicture = profilePictureURL;
                localStorage.setItem('userCredentials', JSON.stringify(userData));
            };
            reader.readAsDataURL(file);
        }
    });

    // Remove Profile Picture
    document.getElementById('removeProfilePicture').addEventListener('click', () => {
        profilePictureElement.style.backgroundImage = ""; // Remove image
        profilePictureElement.textContent = userData.name.slice(0, 2).toUpperCase(); // Show initials
        
        // Remove profile picture from localStorage
        delete userData.profilePicture;
        localStorage.setItem('userCredentials', JSON.stringify(userData));
    });

    // Change Emergency Number
    document.getElementById('changeEmergencyNumber').addEventListener('click', () => {
        const newNumber = prompt("Enter new emergency contact number:");
        if (newNumber) {
            userData.emergencyContact = newNumber;
            localStorage.setItem('userCredentials', JSON.stringify(userData));
            alert('Emergency contact updated successfully!');
        }
    });

    // Logout functionality
    document.getElementById('logout').addEventListener('click', () => {
        // Clear only the loggedIn state, keep user data
        localStorage.setItem('loggedIn', 'false');
        
        // Redirect to the login page
        window.location.href = 'login.html'; // Change this to your actual login page
    });
});
