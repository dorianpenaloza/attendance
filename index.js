const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//routes
const index = require('./routes/index')
const names = require('./routes/names');

// Initialize app
const app = express();

//Add middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('css'));

app.use('/', index);
app.use('/names', names);

// Set up our server
const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on: ${port}`);
});
