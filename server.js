const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({ schema: routes, graphiql: true }));

app.listen(port, () => console.log(`Server running on port ${port}...`));