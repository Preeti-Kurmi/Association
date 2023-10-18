const { Sequelize } = require('sequelize');
const User =require('./database');
const Book=User.define('book',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
  
    title:{
        type:Sequelize.STRING,
    },
    author:{
        type:Sequelize.STRING,
    }
   

})
    module.exports=Book;