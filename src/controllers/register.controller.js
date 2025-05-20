const bcrypt=require('bcrypt')
const regservice = require('../services/register.servive')
const usermodel = require("../models/register.model")

exports.registerUser = async (req, res) => {
    const {name, email, contact, username, password } =   req.body
    const saltRound=10;
    const hashpassword= await bcrypt.hash(password,saltRound)
    console.log(name+" "+email+" "+password);
    let msg = await regservice.acceptuser(name, email, contact, username, hashpassword)
    console.log(msg)
    res.render("navbar.ejs",{message:msg});
    // res.end();
}

exports.ValidateUser = async (req, res) => {

    try {
        const { username, password } = req.body;
       
         console.log(username+" "+password)
        let result = await usermodel.Uservalidate(username)
       
        if (result.length > 0) {
            let match=await bcrypt.compare(password,result[0].password)
            console.log(result)
            if(match)
            {
                req.session.uid=result[0].id;
               // console.log(req.session.uid);
            res.render("Dashboard.ejs",{user:result[0].name})
            
            }else{
                res.render("Validate.ejs",{message:"wrong password enter valid password"})
            }
        } else {
            console.log(result);
            res.status(401).send("user not found")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }
}

exports.viewProfiledetail=async(req,res)=>{
    let userid=req.session.uid;
    //console.log()
    //console.log(userid)
    try{
        let result=await usermodel.getUserProfile(userid);
        if(result.length>0)
        {
            res.render("UpdateProfile.ejs",{user:result});
        }else
        {
            res.send("invalid");
        }

    }catch(err)
    {
        res.status(500).send("internal server error"+err)
    }
    
    
}

exports.updateProfile=async(req,res)=>{
    let userid=req.session.uid;
    const{name,email,contact,username,password}=req.body
    try{
        let saltRound=10;
        let hashpassword=await bcrypt.hash(password,saltRound)
        let result=await usermodel.updateProfile(name,email,contact,username,hashpassword,userid);
        res.render("Dashboard.ejs",{user:name})
    }catch(err)
    {
        res.send("error"+err)
    }  
}

exports.logoutUser=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("err")
        }else{
            res.redirect("/signin");
        }
    })
    
}
// $2b$10$mPUFtsWC3VE6Z8UR0.IujelGcN3LLTdIjAd31tCa2y1f9281nfjo6

// $2b$10$.MUPmyhVAj.cFPAfyHb9R.2sp4qH0apRfDkewN8nHCxCHt25JQe3e


