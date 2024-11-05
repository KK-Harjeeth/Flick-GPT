# Flick-GPT
[![Application Features:]()](https://github.com/user-attachments/assets/81f87ada-7040-46d4-bcbb-56a2bde5b0b0)

Flick-GPT is a movie browsing application that leverages Gemini AI for natural language search, providing a seamless movie discovery experience with user authentication, multi-language support, and real-time movie suggestions.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **User Authentication**
  - Secure Sign-In / Sign-Up.
  - Redirect to the Browse page upon login.

- **Browse Page**
  - Display movie trailers in the background.
  - Show titles, descriptions, and suggested movie lists.

- **Gemini AI-Powered Search**
  - Search movies with natural language queries.
  - Real-time movie suggestions based on search inputs.

- **Multi-Language Support**
  - Access content in multiple languages for an international user base.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Firebase Authentication
- **Database:** Firebase Realtime Database
- **APIs:** Gemini AI API

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Flick-GPT.git
   cd Flick-GPT
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Update `firebase.json` with your Firebase project details.

4. **Configure Gemini AI API:**
   - Set up Gemini API keys in a `.env` file as follows:
     ```plaintext
     REACT_APP_GEMINI_API_KEY=your_gemini_api_key
     ```

5. **Run the application:**
   ```bash
   npm start
   ```

6. **Build for Production:**
   ```bash
   npm run build
   ```

## Usage

- **Home Page:** View trailers, trending movies, and movie suggestions.
- **Search:** Use natural language to find movies quickly, leveraging Gemini AI's capabilities for understanding complex queries.

## Project Structure

```plaintext
├── Flick-GPT-main/
    └── README.md                 # Documentation for project setup, features, and usage.
    └── firebase.json             # Firebase configuration for deployment and project settings.
    └── package-lock.json         # Tracks the exact versions of dependencies installed.
    └── package.json              # Defines project dependencies and scripts for npm.
    └── tailwind.config.js        # Tailwind CSS configuration for styling customization.
    ├── public/
        └── favicon.ico           # Icon displayed in the browser tab for the app.
        └── index.html            # Main HTML file that serves the React application.
        └── logo192.png           # Logo used for icons and splash screens.
        └── logo512.png           # Larger logo used for splash screens.
        └── manifest.json         # Metadata for Progressive Web App (PWA) configuration.
        └── robots.txt            # Directs search engine crawlers on indexing behavior.
    ├── src/
        └── App.jsx               # Root component managing the main app structure.
        └── index.css             # Global styles for the application.
        └── index.js              # Entry point for React to render the app.
        └── reportWebVitals.js    # Performance measuring tool for app load and runtime.
        └── setupTests.js         # Configures testing environment for Jest and React Testing Library.
        ├── components/
            └── Body.jsx                # Defines the main content layout of the browse page.
            └── Browse.jsx              # Page displaying movie browsing features and layout.
            └── GPTMovieSuggestions.jsx # Component for displaying GPT-powered movie suggestions.
            └── GPTSearchBar.jsx        # Search bar allowing users to input natural language queries.
            └── GPTSearchPage.jsx       # Page displaying search results from GPT integration.
            └── Header.jsx              # Header component containing navigation and branding.
            └── Login.jsx               # Login form component for user authentication.
            └── MainContainer.jsx       # Main wrapper component for browse and content sections.
            └── MovieCard.jsx           # Individual movie card component displaying movie details.
            └── MovieList.jsx           # List component for displaying a collection of movie cards.
            └── SecondaryContainer.jsx  # Secondary content section for supplementary movie info.
            └── SignUp.jsx              # Sign-up form component for new user registration.
            └── VideoBackground.jsx     # Component for video trailer background display.
            └── VideoTitle.jsx          # Component displaying the title over the video background.
        ├── hooks/
            └── useNowPlayingMovies.js  # Custom hook fetching "now playing" movies.
            └── usePopularMovies.js     # Custom hook fetching popular movies.
            └── useTopRatedMovies.js    # Custom hook fetching top-rated movies.
            └── useUpComingMovies.js    # Custom hook fetching upcoming movies.
        ├── utils/
            └── FlickGPTlogo.png        # Logo image used across the application.
            └── UserSlice.js            # Redux slice managing user state.
            └── appStore.js             # Redux store setup and configuration.
            └── configSlice.js          # Redux slice managing app configuration.
            └── constants.js            # File for storing constant values and settings.
            └── firebase.js             # Firebase configuration and initialization.
            └── gptSlice.js             # Redux slice handling GPT search and responses.
            └── languageConstants.js    # File for language-related constants and settings.
            └── moviesSlice.js          # Redux slice managing movie data.
            └── openaiApi.js            # API setup for interacting with Gemini AI (or OpenAI).

```
