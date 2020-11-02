var express= require('express');
var app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/test.html');
})

// app.get('/title_image.jpg',function(req,res){
//     res.sendFile('title_image.jpg');
// })

// app.get('/hare_rama.mp3',function(req,res){
//     res.sendFile('hare_rama.mp3');
// })


app.listen(process.env.PORT || 3000) ;
