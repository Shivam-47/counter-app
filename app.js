var express= require('express');
var app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/test.html');
})

app.listen(3000 || process.env.PORT);