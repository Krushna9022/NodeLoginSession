const app=require("./src/app.js")
const port=9091


app.listen(port,()=>
{
    console.log(`server is running on port ${port}`);
})