exports.navbar=(req,res)=>{
    res.render('Navbar.ejs',{message:""})
}

exports.signin=(req,res)=>{
    res.render("Validate.ejs",{message:""});
}

exports.singup=(req,res)=>{
    res.render("Register.ejs");
}

