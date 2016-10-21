const express = require('express');
const router = express.Router();


const names = { }; //create an empty object
var newDate = Date();

router.get('/', function(req, res, next) {
  res.render('index.ejs', { names }); //renders the 'names' object into index.ejs
});

router.post('/', function(req, res, next) {
  const name = req.body.name; // passes the posted 'name' from the form set up in the index.ejs

    //logic to receive and increase names
    if (names[name]) { //uses key:value pair to check if the 'name' you are passing already exist in the 'names={}' object
      names[name]++; //if it exist, increase(++) 'name' by 1
    }
    else {
      names[name] = 1; //if it does not exist, assign '1' to the new 'name'
    }

  console.log(names); //displays the key:value pair map in the terminal
  res.redirect('/names');
});

module.exports = router;
