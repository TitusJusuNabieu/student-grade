const Sequelize = require('sequelize')
const sequelize = require("../config/db");

const Student = sequelize.define("student",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: true
        }
    },

   physics:{
        type:Sequelize.INTEGER,
        
    },
    maths:{
        type:Sequelize.INTEGER,
        
    },
    english:{
        type:Sequelize.INTEGER,
        
    },
    

});

module.exports = Student