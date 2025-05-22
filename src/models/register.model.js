const conn=require('../config/db.config')

exports.RegisterUser=(...user)=>{
    return new Promise((resolve,reject)=>{
        conn.query("insert into User values(0,?,?,?,?,?)",user,(err,result)=>{
        if(err)
        {
           reject("data not inserted "+err)
        }else{
           resolve("data inserted")
        }
    })
    })  
}

exports.Uservalidate=(validusername)=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from User where username=?",validusername,(err,result)=>{
            if(err)
            {
                reject("err")
            }else{
                resolve(result)
            }
        })
    })
}

exports.getUserProfile=(userid)=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from user where id=?",[userid],(err,result)=>{
            if(err)
            {
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}
exports.updateProfile=(...user)=>{
    return new Promise((resolve,reject)=>{
        conn.query("update user set name=?,email=?,contact=?,username=?,password=? where id=?",user,(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve("update sucessfully...");
            }
        })
    })
}

exports.viewProfileByCookie=(usercookie)=>{
    return new Promise((res,rej)=>{
        conn.query("select * from user where username=?",[usercookie],(err,result)=>{
            if(err)
               {
                rej(err)
               } else{
                res(result)
               }
        })
    })
}