const express=require('express');
const sequelize=require('./database');
const app= express();
const Book=require('./model');
const Note=require('./model2');
const route=express.Router();
// app.post('/',async(req,res)=>{
//     try{
//         const response=await Note();
//     res.send("hi how are you");
// }
//     catch(err){
//         console.log(er);
//     }


// })
app.post('/create/book/:title/:author',async(req,res)=>{
    
   
   
    try{
        const response=await new Book({
            
            author:req.params.author,
            title:req.params.title
    
        });
    res.send("hi how are you");
}
    catch(err){
        console.log(err);
        res.send(err);
    }


})
Book.hasMany(Note);
Note.belongsTo(Book);
sequelize.sync({force:false})
.then(res=>{
    console.log("Database connected");
    app.listen(8000);
})
.catch(err=>{
    console.log(err);
})


        
        
    
