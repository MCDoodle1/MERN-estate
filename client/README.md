# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Instructions:

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

Dependencies:

1. Vite :
   Tailwind :
2. React Router: npm i react-router-dom
3. React Icons: npm i react-icons
4. package.json: npm init -y
   express: npm i express
   nodemon: npm i nodemon
5. mongoDB: npm i mongoose
   dotenv: npm i dotenv
6. ***
7. ***
8. bcrypt: npm i bcryptjs
9. ***
10. ***
11. ***
12. JWT: npm i jsonwebtoken
13. ***
14. Redux Toolkit: npm i @reduxjs/toolkit react-redux
15. Redux Persist: npm i redux-persist
16. Firebase: npm install firebase (https://console.firebase.google.com)
17. ***
18. ***
19. ***
20. Cookie-Parser: npm i cookie-parser
21. ***
22. ***
23. ***
24. ***
25. ***
26. ***
27. ***
28. ***
29. ***
30. ***
31. ***
32. Swiper: npm i swiper
33. ***
34. ***
35. ***
