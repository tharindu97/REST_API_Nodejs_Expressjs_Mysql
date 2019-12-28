//import sequelize
var Sequelize = require('sequelize');
// import connection database
var sequelize = require('./database');
//import model for FK roleId
var Role = require('./Role');
var nametable = 'employee';

var Employee = sequelize.define(nametable, {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.STRING,
    roleId: {
        type:Sequelize.INTEGER,
        //This is a reference to another model
        reference: {
            model: Role,
            key: 'id'
        }
    }
},
{
    timestamps: false,
}

);

Employee.belongsTo(Role)
module.exports = Employee;