const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();

//set the port
APP.set('port', 8080);

//tell express that we want to use the ../src/home-work folder
//for our static assets
APP.use(EXPRESS.static(PATH.join(__dirname, './../src/home-work')));

APP.use(EXPRESS.static(PATH.join(__dirname, './../docs')));

//tell express that we want to use the ../dist folder
//for our static assets
APP.use(EXPRESS.static(PATH.join(__dirname, './../dist')));

// Listen for requests
const SERVER = APP.listen(APP.get('port'), '0.0.0.0', () => {
  console.log('The server is running on http://10.6.129.85:' + APP.get('port'));
});