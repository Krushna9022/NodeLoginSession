const mysql=require('mysql')

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"krushna",
    database:"nodeLearning"
})

module.exports=conn