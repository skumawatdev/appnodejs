const express = require("express")

const {exec} = require("child_process")



const app = express()




function drun(req, res){
  const outp = req.query.cmd;
  

    exec(outp, function(err, stdout, stderr){ 

        res.send("<pre>"+ stdout + "</pre>")   
    })
    
}
app.get("/drun", drun)


function dockerapp (req , res) {
    res.sendFile(__dirname + "/index.html")
    
    
}
app.get("/dapp", dockerapp)


app.listen(3000, function() {console.log("Server Started Successfully.......")})
