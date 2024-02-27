const express = require('express');
const app = express();
var users=[{
    name:"John",
    kidneys:[{
        healthy: false
    }]
}]

app.get("/",function(req,res){
    // res.send("Hello World");
    const johnkidneys=users[0].kidneys;
    const numberofKidneys=johnkidneys.length;
    let numberofhealthyKidneys=0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            numberofhealthyKidneys++;
        }
    }
    const numberofunhealthyKidneys=numberofKidneys-numberofhealthyKidneys;
    // console.log(johnkidneys);
    res.json({
        numberofKidneys,
        numberofhealthyKidneys,
        numberofunhealthyKidneys
    }); 
});

app.post("/",function(req,res){
    const ishealthy=req.body.ishelathy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg:"Done!"
    })
});

app.put("/",function(req,res){
    for(let i=0;i<users[0].length;i++){
     users[0].kidneys[i].healthy=true;   
    }
    res.json({
        msg:"Completed!"})
})

app.listen(3000);