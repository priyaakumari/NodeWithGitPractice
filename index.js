const express= require('express');
const app=express();
const port=8000;


//use express router
app.use('/',require('./routes'));       //or we can write app.use('/',require('./routes/index.js')); both will go to index of routes

//set up view engine i.e ejs
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
         console.log(`Error on running : ${err}`);
         return;
    }
    console.log(`Server running on port: ${port}`);
})