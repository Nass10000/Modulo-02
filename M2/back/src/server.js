const express = require('express'); 

const app = express(); 

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev')); 
app.use(cors()); 
app.use(express.json()); 


const routes = require('./routes'); 
app.use('/', routes); 

module.exports = app; 
