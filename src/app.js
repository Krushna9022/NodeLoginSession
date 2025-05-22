let express= require('express')
let session=require('express-session');
let cookie=require("cookie-parser");
let app=express();

let registerRouter=require('./routes/register.route')
app.use(cookie());
app.use(session({
    secret:"secret123",
    resave:false,
    saveUninitialized:false,   
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.set("views engine ","ejs");
app.use("/",registerRouter)



module.exports=app;