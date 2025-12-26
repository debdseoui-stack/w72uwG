const express = require('express');
const database = require('./database'); // Import the unified MongoDB connection module
const ejs = require('ejs');
const indexfilesRouter = require('./routes/indexfiles');
const xxloadsRouter = require('./routes/xxloads');
const xssuserentryRouter = require('./routes/xssuserentry');
const isletuissRouter = require('./routes/isletuiss');
const reqRouter = require('./routes/req');
const beepRouter = require('./routes/beep');
const audioRouter = require('./routes/audio');
const codeRouter = require('./routes/code');
const mcodeRouter = require('./routes/mcode');
const codeloadRouter = require('./routes/codeload');
const backendRouter = require('./routes/backend');


const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to pass the database connection to every route
app.use((req, res, next) => {
  req.db = database;
  req.dbu = database; // Use the same database object for both db and dbu for backward compatibility
  next();
});


// Define a route to run index page automode on 
app.use(express.urlencoded({ extended: true }));
app.use('/',indexfilesRouter);
app.use('/xxloads',xxloadsRouter );
app.use('/xssuserentry',xssuserentryRouter);
app.use('/isletuiss',isletuissRouter );
app.use('/req',reqRouter );
app.use('/beep',beepRouter );
app.use('/audio',audioRouter);
app.use('/code',codeRouter);
app.use('/mcode',mcodeRouter);
app.use('/codeload',codeloadRouter);
app.use('/backend',backendRouter);






// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
