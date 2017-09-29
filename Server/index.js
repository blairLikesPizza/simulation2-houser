const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const house_controller = require(`${__dirname}/controllers/house_controller`);
require('dotenv').config();

var app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

/* Endpoints */
const housesUrl = '/api/houses';

app.get(housesUrl, house_controller.get);
app.post(`${housesUrl}/:name/:description/:address/:city/:imagurl/:loan/:monthlymorgage/:desiredrent`,
house_controller.add);
app.delete(`${housesUrl}/:id`, house_controller.delete);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}.`);
});
