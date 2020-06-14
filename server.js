const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const queries = require('./queries/queries');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('MongoDB Atlas is connected!'));
mongoose.connection.on('error', err => { throw err });

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use('/graphql', graphqlHTTP({ schema: queries, graphiql: true }));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));
}

app.listen(port, () => console.log(`Server running on port ${port}...`));