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
