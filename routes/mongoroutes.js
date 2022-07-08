const employee=require('../database/employeeschema')

var express=require("express")
var route=express.Router()

route.get("/employee",function(request,response){
    employee.find({},{_id:0},function(err,data){
        if(err) 
           response.send("No DAta")
        else
           response.json(data)
    })
})


route.post("/employee",function(request,response){
    employee.insertMany(request.body,function(err,data){
        if(err) 
           response.send("No DAtA")
        else
           response.json(data)
    })
})

route.delete("/employee/:sno",function(request,response){
    employee.deleteMany({eno:request.params.eno},function(err,data){
        if(err) 
           response.send("Not deleted")
        else
           response.json({status:"Deleted"})
    })
})




module.exports=route