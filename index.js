const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

require('./routes/user_routes.js')(app);

app.listen(8000, () => {console.log("server is running")});