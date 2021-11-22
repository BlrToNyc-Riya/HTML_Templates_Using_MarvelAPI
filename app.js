const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
// const server = require('./server');  

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

configRoutes(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("We've now got a server!");
  console.log(`Your routes will be running on http://localhost:${port}`);
});



// server.create()
//     .then(app => {
//         app.listen(port, () => {
//             console.log(`Server has started on port ${port}!`);
//         });
//     }).catch(err => console.log(err));