//import express
const express = require('express');
const app = express();

//import routers
const employeeRouters = require('./routes/employeeRoute');
//Setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Router
app.use('/employee', employeeRouters);

app.use('/test', (req, res) => {
    res.send("Test route");
  });

app.use('/', (req, res) => {
    res.send('Hello tharindu');
});

app.listen(app.get('port'), () => {
    console.log('Start server on port ' + app.get('port'));
})