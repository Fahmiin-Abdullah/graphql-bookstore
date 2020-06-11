const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');

const app = express();
const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP());

app.listen(port, () => console.log(`Server running on port ${port}...`));