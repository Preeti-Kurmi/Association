
const { Sequelize } = require('sequelize');
const sequelize=require('./database');
const Note=sequelize.define('note',{
 id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,

 },
 
 description:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 subject:{
    type:Sequelize.STRING,
    allowNull:false,
 }
})
    module.exports=Note;