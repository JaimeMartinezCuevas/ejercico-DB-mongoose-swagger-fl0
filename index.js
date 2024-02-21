const express = require('express');
const app = express();

const { dbConnection } = require('./config/config');
const swaggerUI = require('swagger-ui-express')
const routes = require('./routes');
const docs = require('./docs/index')

const PORT = 8080


app.use(express.json());

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));