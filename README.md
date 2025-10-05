# Lumen-2.0 by RJDP

**A minimal, elegant GitHub Pages theme.** Simple to use, beautiful by default.

![Version](https://img.shields.io/badge/version-2.1-blue) ![License](https://img.shields.io/badge/license-CC%20BY--SA%203.0-green)

## 📖 Overview

Lumen is a clean, minimal theme for GitHub Pages designed with **simplicity and elegance** in mind. It features beautiful typography with Merriweather headings and Open Sans body text, a soft light blue color scheme, and polished UI elements that make your content stand out.

### Key Features

- 🎨 **Beautiful Typography** – Merriweather for headings, Open Sans for body text
- 🔵 **Light Blue Theme** – Soft, professional color palette (#5BA3D0)
- 🌓 **Dark Mode** – Seamless light/dark theme switching with localStorage
- ✨ **Polished UI** – Rounded buttons and inputs with smooth hover effects
- 📱 **Fully Responsive** – Looks great on all devices
- ⚡ **Lightning Fast** – No frameworks, no build tools, just HTML/CSS
- ♿ **Accessible** – Semantic HTML, ARIA labels, proper focus states
- 🎯 **Easy to Customize** – Simple CSS variables and clean code

## 🚀 Use Cases

### 1. **Personal Portfolio**
Showcase your work, skills, and projects with a clean, professional design. Perfect for:
- Developers showcasing coding projects
- Designers displaying their portfolio
- Freelancers building their online presence
- Students creating academic portfolios

### 2. **Project Documentation**
Create beautiful documentation for your open-source projects:
- API documentation
- User guides and tutorials
- Technical specifications
- Getting started guides

### 3. **Personal Blog**
Share your thoughts, tutorials, and experiences:
- Tech blogs and tutorials
- Personal journals and essays
- Learning notes and knowledge base
- Code snippets and solutions

### 4. **Professional Resume/CV**
Build an interactive online resume:
- Highlight work experience
- Showcase skills and achievements
- Link to projects and social profiles
- Provide contact information

### 5. **Small Business Website**
Create a simple, elegant web presence:
- Service descriptions
- Contact and inquiry forms
- Company information
- Client testimonials

### 6. **Academic Pages**
Perfect for researchers and educators:
- Publication lists
- Research interests
- Course materials
- Academic profiles

### 7. **Landing Pages**
Build focused landing pages for:
- Product launches
- Event announcements
- Newsletter signups
- Campaign pages

## 🎯 Quick Start

### 1. Use This Theme

1. **Fork** this repository
2. **Enable GitHub Pages** in Settings → Pages → Source (main branch)
3. **Edit** the HTML files with your content
4. **Customize** colors and styles in `stylesheets/styles.css`
5. **Done!** Your site is live at `https://yourusername.github.io/repository-name`

### 2. Local Development

```bash
# Clone the repository
git clone https://github.com/RajdeepKushwaha5/Lumen-2.0.git

# Navigate to the lumen-variant folder
cd Lumen-2.0/lumen-variant

# Open index.html in your browser
# Or use a simple HTTP server
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
lumen-variant/
├── index.html          # Homepage with hero section
├── about.html          # About page
├── projects.html       # Projects showcase
├── blog.html           # Blog posts
├── contact.html        # Contact form
├── stylesheets/
│   └── styles.css      # All styles (~350 lines)
├── javascripts/
│   └── dark-mode.js    # Dark mode toggle (15 lines)
├── README.md           # This file
└── LICENSE             # CC BY-SA 3.0 License
```

## 🎨 Customization

### Change Brand Colors

Edit `stylesheets/styles.css`:

```css
:root {
  --bg: #ffffff;
  --text: #333333;
  --accent: #5BA3D0;           /* Change this to your brand color */
  --accent-hover: #4A8FB8;     /* Darker shade for hover */
  --accent-light: #E8F4F8;     /* Light shade for backgrounds */
}
```

### Update Fonts

The theme uses Google Fonts. Change them in the HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourHeadingFont&family=YourBodyFont&display=swap" rel="stylesheet">
```

Then update in `styles.css`:

```css
body {
  font-family: 'YourBodyFont', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'YourHeadingFont', serif;
}
```

### Modify Navigation

Edit the `<nav>` section in each HTML file:

```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="projects.html">Projects</a>
  <!-- Add or remove links as needed -->
</nav>
```

### Add New Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Rename it to your new page name
3. Update the content
4. Add a link in the navigation menu

## 🎨 Design Features

### Typography
- **Headings**: Merriweather (elegant serif font)
- **Body**: Open Sans (clean, readable sans-serif)
- **Line Height**: 1.6 for optimal readability
- **Responsive Sizes**: Scales appropriately on all devices

### Color Palette
- **Primary**: #5BA3D0 (Light Blue)
- **Hover**: #4A8FB8 (Darker Blue)
- **Background**: #FFFFFF (Light) / #1A1A1A (Dark)
- **Text**: #333333 (Light) / #E0E0E0 (Dark)

### UI Elements
- **Buttons**: 16px rounded corners, scale & glow on hover
- **Inputs**: 12px rounded corners, focus glow effect
- **Theme Toggle**: Circular button (40px) with smooth transitions
- **Shadows**: Subtle, layered shadows for depth

## 🌐 Browser Support

Works perfectly in all modern browsers:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📝 License

This project is licensed under the **Creative Commons Attribution-ShareAlike 3.0 License (CC BY-SA 3.0)**.

You're free to:
- ✅ Use for personal or commercial projects
- ✅ Modify and adapt the theme
- ✅ Share your modifications

You must:
- 📌 Give appropriate credit
- 📌 Share modifications under the same license
- 📌 Indicate if changes were made

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 👤 Author

**Rajdeep Kushwaha**
- GitHub: [@RajdeepKushwaha5](https://github.com/RajdeepKushwaha5)
- Email: rajdeepsingh10789@gmail.com
- Repository: [Lumen-2.0](https://github.com/RajdeepKushwaha5/Lumen-2.0)

## 🙏 Acknowledgments

- Font families from [Google Fonts](https://fonts.google.com/)
- Inspired by minimal design principles
- Built for the GitHub Pages community

## 📞 Support

If you have questions or need help:
- 📧 Email: rajdeepsingh10789@gmail.com
- 💬 GitHub Issues: [Open an issue](https://github.com/RajdeepKushwaha5/Lumen-2.0/issues)
- ⭐ Star this repo if you find it useful!

---

**Made with ❤️ for simplicity and elegance**
