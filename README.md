# My Portfolio Website

A modern, single-page portfolio website with a structured dark-blue theme.

## Features

- **Single Page Design**: All content (Home, About, Portfolio, Contact) on one page
- **Dark Blue Theme**: Professional gradient-based dark blue color scheme
- **Smooth Navigation**: Buttons and navigation links smoothly scroll to sections
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Easy to Customize**: All content has IDs for easy editing

## How to Edit Content

All editable content has unique IDs. You can change the content by editing the `index.html` file:

### Profile Photo
- Replace the image URL in `<img src="..." id="profileImage">`
- Or upload your own photo and change the src to your photo filename

### Hero Section (Home)
- `#heroTitle` - Main title: "Welcome to My Portfolio"
- `#heroSubtitle` - Subtitle: "Professional. Creative. Innovative."

### About Section
- `#aboutText` - Your personal description

### Portfolio Section
- `#portfolioIntro` - Portfolio introduction text
- `#project1Title`, `#project1Description` - First project
- `#project2Title`, `#project2Description` - Second project
- `#project3Title`, `#project3Description` - Third project

### Contact Section
- `#emailAddress` - Your email address
- `#linkedinUrl` - Your LinkedIn profile URL

### Footer
- `#footerText` - Copyright text

## Color Scheme

The website uses a professional dark-blue color palette:
- Primary Dark Blue: `#0a1929`, `#0d1b2a`
- Accent Blue: `#1976d2`, `#64b5f6`
- Gradients: Various blue gradients for depth and visual interest

## Technologies Used

- HTML5
- CSS3 (with gradients, flexbox, and grid)
- Vanilla JavaScript (smooth scrolling, active navigation)

## Quick Start

1. Open `index.html` in a web browser
2. Navigate using the top menu or buttons
3. Edit content by finding the IDs mentioned above in `index.html`
4. Customize colors in `style.css` if needed

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
