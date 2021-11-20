const characterRoutes = require('./characters');
const formRoutes = require('./form')
const path = require('path');

const constructorMethod = (app) => {
  app.use('/characters', characterRoutes);
  // app.use('/', (req, res) => {
  //   res.render('layouts/main',{title:"Characters search from index.js_routes"});
  // });
  app.use('/', formRoutes);
  
  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;