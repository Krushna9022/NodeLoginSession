const usermodel=require('../models/register.model')
exports.navbar=(req,res)=>{
    res.render('Navbar.ejs',{message:""})
}

exports.signin=async (req,res)=>{
      let usercookie=req.cookies.username;
       //  console.log(usercookie);
          if (usercookie && usercookie !== "undefined") {
            try {
                const result = await usermodel.viewProfileByCookie(usercookie);
                if (result.length > 0) {
                    return res.render("Dashboard.ejs", { user: result[0].name });
                }
            } catch (err) {
                console.log("Error with cookie-based login:", err);
                // continue to standard login
            }
        }else{
            res.render("Validate.ejs",{message:""});
        }
    
}

exports.singup=(req,res)=>{
    res.render("Register.ejs");
}

