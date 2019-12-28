const express = require('express');
const router = express.Router();



//importing controllers
const employeeControllers = require('../controllers/customerController');

router.get('/list', employeeControllers.list);
//router.get('/datatest', employeeControllers.testdata);
//router.get('/list', employeeControllers.list);
//router.get('/test', employeeControllers.test);

router.get('/save', (req,res) => {
    res.json({state: 'Employeed save'});
});

module.exports = router;