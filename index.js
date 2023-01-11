const express= require('express');
const app=express();
const port=8000;

// require express-ejs-layouts
const expressLayouts= require('express-ejs-layouts');

//  use assets folder
app.use(express.static('./assets'));


// extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express-ejs-layouts
app.use(expressLayouts);

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