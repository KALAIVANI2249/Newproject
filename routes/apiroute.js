var dbops = require('../database/dbops')
var express=require("express")
var route=express.Router()

route.get("/emp",function(request,response){
    dbops.getEmp(function(err,data){
        if(err)
           response.status(500)
        else
           response.send(data)
    })
})

route.get("/emp/:sno",function(request,response){
    dbops.getEmp(request.params.sno,function(err,data){
        if(err)
           response.status(500)
        else
           response.send(data[0]?data[0]:"no Record")
    })
})

route.delete("/emp/:sno",function(request,response){
    dbops.deletePerson(request.params.sno,function(err,data){
        if(err)
           response.status(500)
        else
           response.send("Record Deleted")
    })
})

route.put("/emp/:sno",function(request,response){
dbops.getPerson(request.params.sno,function(err,data){
    if(err)
       response.status(500).send("server error")
    else{
        if(!data[0])
           response.send("No such record")
    else{
    let sno=request.params.sno;
    let name=request.body.name?request.body.name:data[0].name
    let designation=request.body.designation?request.body.designation:data[0].designation
    let age=request.body.age?request.body.age:data[0].age
    dbops.updatePerson(sno,name,designation,age,function(err,data){
        if(err)
           response.status(500)
        else
           response.send("Record Deleted")
    })
  }
}
})
})


route.post("/people",function(request,response){
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

module.exports = route