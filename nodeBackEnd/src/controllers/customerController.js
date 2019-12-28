const controller = {}

var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

// para migrar por si no tiene tablas
sequelize.sync()

controller.list = async (req, res) => {
    const data = await Employee.findAll({
        include: [Role]
    })
    .then(function(data){
        return data;
    })
    .catch(error => {
        return error;
    })

    res.json({success: true, data: data});
}

/*
controller.testdata = async (req, res) =>{
    const response = await sequelize.sync().then(function (){
        //Create role
        Role.create({
            role:  'Admin'
        });

        // create employee
        Employee.create({
            name: 'Tharindu Kavishna',
            email:  'tharindukavishna@gmail.com',
            address: 'panama north panama',
            phone: '0719484749',
            roleId:1
        });
        const data = Employee.findAll();
        return data;
    })
    .catch(err => {
        return err;
    });
    res.json({succes: true, data: response});
}
controller.list = async ( req, res) => {
    const data = await Employee.findAll();
    res.json(data)

}*/

controller.test = (req, res) => {
    const data = {
        name: "tharindu kavishna",
        age: 22, 
        city:'panama'
    }

    console.log('Send data from controller employee');
    res.json(data);
}

module.exports = controller;