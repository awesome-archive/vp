var globalConfig = require('../config/env'),
  path = require('path');

var FRONTURLs = [
  '/auth',
  '/',
  '/portfolio',
  '/latest',
  '/like',
  '/about',

  '/new',
  '/extract',
  '/resourceapi',
  '/about',
  '/adminpanel'
];

module.exports = {
  main: function(req, res, next){
    if(FRONTURLs.indexOf(req.originalUrl) < 0){
      res.redirect('/')
    }else{
      if(globalConfig.isDev){
        console.log(`${req.method}: ${req.originalUrl}`);
      }else{
        res.cookie('_csrf',req.csrfToken());
      }

      res.sendFile(path.resolve(__dirname,`../../views/index.html`));
    }
  }
};