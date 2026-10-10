// Get the button element from the HTML
var themeButton = document.getElementById('theme-toggle');

// Function to switch the theme
function switchTheme() {
    // Check if body currently has the light-theme class
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}

// Listen for a click on the button
themeButton.addEventListener('click', switchTheme);


// Contact Form Handler
var contactForm = document.getElementById('contact-form');

function handleFormSubmit(event) {
    // Prevent the page from reloading on form submit
    event.preventDefault();
    
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
}

// Listen for form submission
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}