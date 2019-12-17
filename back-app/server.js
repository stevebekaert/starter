const express = require('express');
const app = express()
const port = 5000;

const router = express.Router()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use('/api', router)

require('./routes/laws.routes.js')(router);

app.listen(port, err => {
    if (err) { 
        throw new Error('Something wrong')
    } 
    console.log(`Server is listening on ${port}`);
})

