const sequelize=require('sequelize');
const sql=new sequelize(
    'nodesql','root','Sagar!@#123',{
        host:'localhost',
        dialect:'mysql'

    })
    module.exports=sql;
