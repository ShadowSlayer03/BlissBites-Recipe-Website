const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./server/routes/recipeRoutes.js');
const connectDB = require('./server/db/dbConnect.js');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 4000;

// Use express.urlencoded middleware and express.static middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: process.env.SESSION_SECRET,
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');

app.use('/', routes);
connectDB();

app.listen(port, () => {
    console.log('App listening successfully on port', port);
});
