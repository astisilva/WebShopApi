const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const productRouter = require('./routers/productRouter')();

app.use('/api', productRouter);

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
