# Cornell Circle K Website

![Cornell Circle K Logo](public/circle-k-logo.png)

A modern, responsive website for Cornell University's Circle K International chapter, built with React and Bootstrap.

## 🌟 Overview

This website serves as the digital presence for Cornell Circle K, a collegiate service organization dedicated to making a positive impact on campus and in the Ithaca community. The site provides information about the club, upcoming service events, and ways to get involved.

## 🚀 Features

- **Responsive Design**: Fully mobile-friendly interface built with React Bootstrap
- **Dynamic Event Listings**: Up-to-date information on upcoming service opportunities
- **Photo Gallery**: Carousel showcasing the club's activities and members
- **Easy Navigation**: Intuitive interface for visitors to learn about the organization

## 🔧 Technologies Used

- **React.js**: Frontend framework
- **React Router**: For page navigation
- **React Bootstrap**: UI component library
- **CSS**: Custom styling
- **Webpack**: Module bundling

## 📋 Pages

- **Home**: Introduction to Cornell Circle K with featured upcoming events
- **About**: Information about the club's mission, values, and impact
- **Events**: Comprehensive listing of upcoming service opportunities, meetings, and social events

## 🏗️ Project Structure

```
cornell-circle-k/
├── public/
│   ├── index.html
│   └── circle-k-logo.png
├── src/
│   ├── assets/
│   │   ├── group/        # Group photos for carousel
│   ├── components/
│   │   ├── Layout.jsx    # Shared layout with navigation and footer
│   │   └── ...
│   ├── data/
│   │   └── eventData.js  # Centralized event data
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   └── EventsPage.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cornell-circle-k.git
   cd cornell-circle-k
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📝 Updating Content

### Adding Events
To add or modify events, edit the `src/data/eventData.js` file:

```javascript
export const upcomingEvents = [
  {
    title: "New Event Title",
    date: "April 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Event Location",
    description: "Event description.",
    category: "Service" // Options: "Service", "Meeting", "Social", "Fundraiser"
    link: "campusgroups" // link to campusgroups
  },
  // Additional events...
];
```

### Updating Photos
To update the group photo carousel:

1. Add new photos to the `src/assets/group/` directory
2. The website will automatically load and display all images from this directory

## 🔄 Deployment

To build the project for production:

```bash
npm run build
```

This will create a `build` directory with optimized files ready for deployment.

## 🤝 Contributing

Contributions are welcome! If you would like to contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or more information about Cornell Circle K, please contact:
- Email: cornellcirclek@gmail.com
- Instagram: [@cornellcirclek](https://instagram.com/cornellcirclek)

---

Developed with ❤️ for Cornell Circle K