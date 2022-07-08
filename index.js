var express=require("express");
var app=express();
var path=require("path");
var dbroute= require("./routes/dbroute");
var apiroute= require("./routes/apiroute");
var mongoroute= require("./routes/mongoroutes");

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, "public/styles/")));
app.use(express.static(path.join(__dirname, "public/scripts/")));
app.use(express.static(path.join(__dirname, "node_modules/")))

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

app.use("/dbpages",dbroute)
app.use("/api",apiroute)
app.use("/mongoapi",mongoroute)

app.get("/",function(request,response){
    response.send("Node JS is working");
})

app.get("/greet/:name",function(request,response){
    response.send("Hello!!!"+request.params.name);
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen("3000",function(){
    console.log("server is started on port number 3000")
})