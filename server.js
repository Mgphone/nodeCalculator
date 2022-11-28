//jshint esversion:6
const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");

});


app.post("/",function(req,res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);
  var n=weight/(height*height);
  res.send('Your BMI is '+n);
});
app.listen(3000,function(){
  console.log("Server started listen on port 3000");
});
