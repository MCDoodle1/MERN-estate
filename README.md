# MERN Estate - Build a Modern Real Estate Marketplace with react MERN

This is the result of Sahand's MERN Stack tutorial on YouTube.

The address of the tutorial is https://www.youtube.com/watch?v=VAaUy_Moivw

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [Author](#author)

## Overview

In this course the user masters MERN stack - MongoDB, Express.js, React, and Node.js by creating a modern real estate market place.

### The challenge

- Create a Signup page where the user can create an account
- Create a Signin page with regular signin and sign in via Google Oauth
- Create a page to list properties
- Create functionality to contact property owners via email
- Create CRUD functionality for signin and listing pages
- Create a user and listing database in MongoDB
- Create search functionality to search listings
- Create a Home page
- Create an About page

### Links

- Solution URL: [GitHub Page](https://github.com/MCDoodle1/MERN-estate)
- Live Site URL: [MERN Estate Live Site](https://mern-estate-qak4.onrender.com)

## My process

1. Create React App using Vite and install Tailwind - Delete unnecessary files
2. Create pages, install react-router-dom and add routes to pages in App.js
3. Create Header
4. Create and run the server: create dir api and file index.js, change package.json scripts
5. Connect to database. Create database in MongoDB and add connection string to index.js file.
   Import dotenv to use a env variable in index.js
6. Create Users Model: api/models/user.model.js
7. Create test API route in 3 files: index.js, api/routes/user.route.js and api/controllers/user.controller.js
8. Create API route for sign up: index.js, api/routes/auth.route.js and api/controllers/auth.controller.js. Hash password en handle errors. Test CRUD functions in Postman.
9. Add Middleware in index.js and a function to handle errors in api/utils/error.js and auth.controller.js
10. Complete sign up page UI
11. Complete sign up page functionality: add onChange and onSubmit functions, loading and error messages to SignUp.js, add proxy server to vite.config.js
12. Create API route for sign in: auth.controler.js, auth.route.js, add token creation
13. Complete sign in page functionality: add onChange and onSubmit functions, loading and error messages to SignUp.js, add proxy server to vite.config.js
14. Add Redux Toolkit: add Provider tag to main.js, create store.js, create userSlice.js
15. Add Redux Persist to add data to localstorage: store.js and main.jsx
16. Add Google OAuth functionality
17. Update header (Header.jsx) and make profile page private (PrivateRoute.jsx & App.jsx)
18. Complete profile page UI (Profile.jsx)
19. Complete image upload functionality (Profile.jsx)
20. Create update user API route (user.controller.js, index.js, user.route.js, verifyUser.js)
21. Complete update user functionality (verifyUser.js, Profile.jsx, userSlice.js)
22. Add delete user functionality (auth.controller.js, user.controller.js, user.route.js, Profile.jsx, userSlice.js)
23. Add sign out user functionality (auth.controller.js, auth.route.js, Profile.jsx, userSlice.js)
24. Add create listing API route (listing.controller.js, index.js, listing.model.js, listing.route.js)
25. Complete create listing page UI (App.jsx, CreateListing.jsx)
26. Complete upload listing images functionality (CreateListing.jsx)
27. Complete create listing page functionality (CreateListing.jsx)
28. Complete show user listings functionality (user.controller.js, user.route.js, Profile.jsx)
29. Complete delete user listing functionality (listing.controller.js & listing.route.js, Profile.jsx)
30. Create update listing API route (listing.controller.js & listing.route.js)
31. Complete update listing functionality on client side (app.js, Profile.jsx, UpdateLising.jsx, listing.controller.js & listing.route.js)
32. Add image slider to the listing page (App.jsx & Listing.jsx)
33. Complete listing page (Listing.jsx)
34. Add contact landlord functionality to listing page
35. Create Search API Route (listing.route.js & listing.controller.js)
36. Complete header search form functionality (Header.jsx)
37. Complete search page UI (Search.jsx & App.jsx)
38. Add onChange and onSubmit functionality to Search page (Search.jsx)
39. Create listing item component and show listings
40. Add show more listings functionality
41. Complete Home page
42. Complete About page

Dependencies:

-1. Vite : npm create vite@latest client
Tailwind : npm install -D tailwindcss postcss autoprefixer / npx tailwindcss init -p
-2. React Router: npm i react-router-dom
-3. React Icons: npm i react-icons
-4. package.json: npm init -y
express: npm i express
nodemon: npm i nodemon
-5. mongoDB: npm i mongoose
dotenv: npm i dotenv
-8. bcrypt: npm i bcryptjs
-12. JWT: npm i jsonwebtoken
-14. Redux Toolkit: npm i @reduxjs/toolkit react-redux
-15. Redux Persist: npm i redux-persist
-16. Firebase: npm install firebase (https://console.firebase.google.com)
-20. Cookie-Parser: npm i cookie-parser
-32. Swiper: npm i swiper
-39. Line-clamp: npm install -D @tailwindcss/line-clamp

### Built with

- MongoDB
- Express
- React
- Node.js
- Redux
- JWT
- Firebase
- Google OAauth

## Author

- Website - [Marco Clarijs](https://github.com/MCDoodle1)
