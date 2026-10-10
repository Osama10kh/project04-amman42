// Select DOM Elements
var profileImg = document.getElementById('profile-img');
var btnPro = document.getElementById('btn-pro');
var btnCasual = document.getElementById('btn-casual');

// Function to update the image source and alt text dynamically
function changePhoto(newSrc, newAlt, activeBtn, inactiveBtn) {
    // Add fade-out class for CSS smooth transition
    profileImg.classList.add('fade-out');

    // Wait for the fade-out effect to complete before updating DOM attributes
    setTimeout(function () {
        profileImg.src = newSrc;
        profileImg.alt = newAlt;

        // Fade back in
        profileImg.classList.remove('fade-out');
    }, 300); // 300ms matches the CSS transition duration

    // Update active button styling
    activeBtn.classList.add('active');
    inactiveBtn.classList.remove('active');
}

// Event Listeners for the buttons
btnPro.addEventListener('click', function () {
    changePhoto(
        'assets/professional.jpg',
        'Osama Khader - Professional Photo',
        btnPro,
        btnCasual
    );
});

btnCasual.addEventListener('click', function () {
    changePhoto(
        'assets/casual.jpg',
        'Osama Khader - Casual Photo',
        btnCasual,
        btnPro
    );
});