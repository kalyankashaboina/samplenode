const express=require("express")

const App=express()


App.get("/",(req,res)=>{
    res.send("hello world this is node js")
})

App.get("/get",(req,res)=>{
    res.send("this is node second page")
})


App.listen(3003,()=>{
    console.log("server is running in 3003")
})



