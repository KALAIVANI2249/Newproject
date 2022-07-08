const connection=require("./connection")

const operations ={
    insert: function(sno,name,designation,age,callback){
        connection.query("insert into emp values(?,?,?)",
        [sno,name,designation,age],
        callback)
         },

     getEmp: function(callback){
       connection.query("select * from emp",callback)
     },

     getPerson: function(sno,callback){
      connection.query("select * from emp where sno=?",[sno],callback)
     },
     deletePerson: function(sno,callback){
      connection.query("delete from emp where sno=?",[sno],callback)
     },

     updatePerson: function(sno,name,designation,callback){
      connection.query("update emp set name=?,designation =?,age=?  where sno=? ",
      [name,designation,age,sno],
      callback)
       },

   }

module.exports = operations;