# Profile View

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg)](https://vercel.com/)

A modern, responsive personal profile dashboard built with React. Display your social media links, current music, and profile information in an elegant interface with dark mode support.

## ✨ Features

- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching
- 👤 **Dynamic Profile Integration** - Fetches profile data from Gravatar API
- 🎵 **Featured Music Link** - Showcase your latest track
- 🔗 **Social Media Grid** - Organized display of all your social platforms
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚡ **Performance Optimized** - Built with Vercel Analytics and Speed Insights
- 🧪 **Fully Tested** - Comprehensive Jest test suite

## 🚀 Tech Stack

- **Frontend**: React 19.0.0
- **HTTP Client**: Axios
- **Analytics**: Vercel Analytics & Speed Insights
- **Testing**: Jest, React Testing Library
- **Styling**: CSS3 with custom properties
- **Deployment**: Vercel

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js       # App header with profile info
│   ├── Main.js         # Main content wrapper
│   ├── Profile.js      # Profile display component
│   ├── Music.js        # Featured music link
│   ├── GridItem.js     # Individual social link items
│   └── Footer.js       # Footer with coder info
├── context/
│   └── ThemeContext.js # Dark/light mode context
├── data/
│   └── linksData.js    # Social media links configuration
├── styles/
│   └── App.css         # Main stylesheet
└── assets/
    └── images/         # Social media icons
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/k1nghandy/Profile-View.git
   cd Profile-View
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your profile**
   Edit `src/data/linksData.js` to customize:
   - Your username
   - Social media links
   - Featured music track

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🚀 Available Scripts

- `npm start` - Runs the development server
- `npm build` - Creates production build
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 🎨 Customization

### Adding Social Links
Edit `src/data/linksData.js`:

```javascript
const linksData = [
  {
    icon: yourIcon,
    name: 'Platform Name',
    url: 'https://your-profile-url.com',
  },
  // Add more links...
];
```

### Updating Profile Info
Change the `username` in `src/data/linksData.js` to your Gravatar username.

### Theme Customization
Modify CSS custom properties in `src/styles/App.css` to change colors, fonts, and spacing.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Tests include component rendering, user interactions, and API integration.

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push to main
3. Environment variables (if any) can be configured in Vercel dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔒 Security

If you discover a security vulnerability, please report it through:
- GitHub Security Advisories
- GitHub Discussions tab
- Email: [Create an issue for contact details]

Please do not report security vulnerabilities through public GitHub issues.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**K1ngHandy**
- GitHub: [@k1nghandy](https://github.com/k1nghandy)
- YouTube: [@K1ngHandy](https://www.youtube.com/@K1ngHandy)

## 🙏 Acknowledgments

- Icons provided by various social media platforms
- Gravatar API for profile integration
- React community for excellent documentation
- Vercel for hosting and analytics

---

⭐ **Star this repository if you found it helpful!**
