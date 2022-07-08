var dbops = require('../database/dbops')
var express=require("express")
var route=express.Router()

route.post("/emp",function(request,response){
    let sno=request.body.sno;
    let name=request.body.name;
    let designation=request.body.designation;
    let age=request.body.age;
    dbops.insert(sno,name,designation,age,function(err,data){
        if(err)
           response.send("Unable to insert person");
        else
           response.send("Succesfully inserted");
    })
})

route.get("/emp",function(request,response){
    dbops.getEmp(function(err,data){
        if(err)
          response.send("No Data found")
        else
          response.render("Emp",{emp:data,programmer: "kalaivani"})
    })
})

module.exports=route