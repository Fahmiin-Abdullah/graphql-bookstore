const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes/routes');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('MongoDB Atlas is connected!'));
mongoose.connection.on('error', err => { throw err });

const app = express();
const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({ schema: routes, graphiql: true }));

app.listen(port, () => console.log(`Server running on port ${port}...`));