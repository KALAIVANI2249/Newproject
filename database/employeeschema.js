var mongoose=require('mongoose');

var employee=mongoose.model('employee',new mongoose.Schema(
    {
      eno: Number,
      name: String,
      designation: String,
      
    },
    { versionKey: false }
),'employee');

module.exports=employee;
