# Personal Portfolio (Exercise 00)

## Overview
An authentic, responsive personal developer portfolio built entirely from scratch using semantic HTML5, modern CSS3 (Flexbox/Grid), and vanilla JavaScript ES6+ without external libraries or frameworks.

## Required Sections Implemented
1. **Header / Navbar**: Responsive navigation with interactive hover logo ("O.K" -> "Osama Khader").
2. **About Me**: Professional introduction including avatar profile photo.
3. **Skills Grid**: Responsive grid displaying core development and security skills.
4. **Project Showcase**: Cards covering Projects 00, 01, 02, and 03.
5. **Hobbies**: List of interests and personal activities.
6. **Contact Form**: Interactive email contact form.
7. **Footer**: Copyright details.

## Mandatory JavaScript Feature & Event Lifecycle Explanation
This project includes an interactive theme switcher button dynamically toggling between Dark and Light mode.

### Event Lifecycle Breakdown (Peer Evaluation Defense):
1. **User Action**: The user performs a click on the `#theme-toggle` button element.
2. **Event Firing**: The browser generates a `click` event and dispatches it through the DOM tree targeting `#theme-toggle`.
3. **JavaScript Callback**: The registered listener `addEventListener('click', callback)` catches the event and executes the callback function.
4. **DOM/CSS Mutation**: The callback toggles the class `.light-theme` on `document.body`. This triggers a CSS style recalculation and re-renders CSS dynamic variables (`--bg-color`, `--text-color`, etc.) seamlessly on the UI.