
//import dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//routers
const shelfRouter = require('./routes/shelves_router');
const userShelfRouter = require('./routes/user_shelves_router');
const gBookRouter = require('./routes/google_book_router');
const userBookRouter = require('./routes/user_books_router');
const authRouter = require('./routes/auth_router');

//app intialize
const app = express()

//.env
require('dotenv').config()

//middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened: false}));
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

//home
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

//app.use
app.use('/api/v1/shelf', shelfRouter);
app.use('/api/v1/userShelf', userShelfRouter);
app.use('/api/v1/books', gBookRouter);
app.use('/api/v1/books/user', userBookRouter);
app.use('/api/v1/auth', authRouter);

// if environment, is production send to react to handle routing
// app.use('*', (req, res) => {
//     process.env.NODE_ENV === 'production'
//       ? res.sendFile(path.join(__dirname, 'public/index.html'))
//       : res.status(404).json({ message: 'not found' });
// });

//error handling
app.use((err, req, res, next) => {
console.log(err);
res.status(err.status || 500).json({
    err,
    message: err.message,
    stack: err.stack,
});
});