# Flick-GPT

# Features: 
- Login / SignUp
    - SignIn / SignUp form
    - redirect to Browse Page
- Browse page 
    - Header
    - Main Movie
        - Trailer in background
        - Title and Description
        - Movie Suggestions
            - MovieLists * N 
- GPT search 
    - search bar
    - Movie Suggestions 

# Planning :
- MainContainer 
    - VideoBackground 
    - VideoTitle 
- Secondary Container 
    - MovieList * n 
        - cards * n


# Procedure :
- npx create-react-app flick-gpt in terminal 
- installing tailwindcss
- building login page
- building common `Header`
- creating `Body.jsx` , `Header.jsx` and `Login.jsx` components
- setting up `routing`
    - npm i -D react-router-dom
    - setting up routing in `App.jsx` file using `createBrowserRouter`
- added `background image` and `netflix logo` from official website
- building `Login Form`
- building `SignUp Form`
- installing library `formik` for form handling
- `useRef` hook lets you reference a value that's not needed for rendering
- ## validation is done ✅
- ## Building Authentication
    - using `firebase` for authentication 
    - open `firebase.google.com`
    - add project
    - name the project 
    - after the setup `select web` to get started
    - ### directly hosting our firebase application on firebase
    - `npm install firebase`
    - create `firebase.js` file in `utils` folder
    - copy the `firebase config` and paste in `firebase.js` file
    - `npm install -g firebase-tools`
    - open `authentication` in `project overview`
    - under `sign-in` method
    - enabled `email-id and password` provider
    - 1) firebase login
    - 2) firebase init => then select hosting
    - now , `firebase.json` file is created 
    - `npm run build` => creates an optimized production build => build folder will be created
    - use the command `firebase deploy` 
    - create SignUp user account 
    - open firebase documentation 
    - search for `authentication`
    - select `manageUsers` under web 
    - add `createUserWithEmailAndPassword` API inside `SignUp.jsx` file
    - whenever we signIn / signUp we will get a `user object` from firebase
    - npm install @reduxjs/toolkit 
    - npm install react-redux 
    - create `appStore.js` file in utils 
    - configure store 
    - create Redux store with `UserSlice.js`
    - implemented `SignOut` feature
    - update profile API 

### `BUG FIX` : if the user is not logged in redirect `/browse` to `login page` and vice-versa
- unsubscribed to `onAuthStateChanged` callback
- # TMDB API :
    - fetch movies from `TMDB` 
    - Go to TMDB API website and `login` 
    - get an access token by registering to an `TMDB API`
    - get data from TMDB now playing movies list API
- creating `movieSlice`
- created `useNowPlayingMovies` custom hook
- added background video using `TMDB videos API`, `Youtube Embed Code` and enabled autoplay and mute