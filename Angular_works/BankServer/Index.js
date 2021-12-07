const express = require('express');
const dataServices = require('./services/data.service')
//create application
const app = express();
app.use(express.json())
//sert default router
app.get('/',(req,res)=>{
    res.send("Hello world happy hacking.......")
})

app.post('/',(req,res)=>{
    res.send("Hello world happy hacking....... Post")
})

app.put('/',(req,res)=>{
    res.send("Hello world happy hacking.......Put")
})

app.patch('/',(req,res)=>{
    res.send("Hello world happy hacking.......Patch")
})
app.delete('/',(req,res)=>{
    res.send("Hello world happy hacking.......Deleted")
})


//register api routes
app.post('/register',(req,res)=>{
    const result = dataServices.register(req.body.accno,req.body.uname,req.body.password)
    res.status(result.statusCode).send(result)
})

//login 
app.post('/login',(req,res)=>{
    const result = dataServices.login(req.body.acno,req.body.pswd)
    res.status(result.statusCode).send(result)
})

//deposit 
app.post('/deposit',(req,res)=>{
    const result = dataServices.deposit(req.body.acno,req.body.pswd,req.body.amnt)
    res.status(result.statusCode).send(result)
})

//withdraw
app.post('/withdraw',(req,res)=>{
    const result = dataServices.withdraw(req.body.acno,req.body.pswd,req.body.amnt)
    res.status(result.statusCode).send(result)
})

//set port number
app.listen(3000,()=>{console.log("Server started at port 3000")})