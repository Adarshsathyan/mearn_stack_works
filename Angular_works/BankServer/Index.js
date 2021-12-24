const express = require("express");
const dataServices = require("./services/data.service");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cors = require('cors');
//create application
const app = express();
app.use(cors({
  origin: 'http://localhost:4200',
  credentials:true
}))
//Middlewares
// app.use((req, res, next) => {
//   console.log("Application specified middlwware");
//   next()
// })
// //login check middlewares
// const verifyLogin = (req, res, next) => {
//   if (!req.session.currentAcno) {
//    res.json( {
//       status: false,
//       statusCode: 401,
//       message: "Please login",
//     })
//   } else {
//     next();
//   }
// }

//jwt middleware
const jwtMiddleware = (req, res, next) => {

  try {
    const token = req.headers["x-access-token"]
    const data = jwt.verify(token, 'helloworld')
    req.currentAcno = data.currentAcno
    next()
  }
  catch {
    res.json( {
            status: false,
            statusCode: 401,
            message: "Please login",
          })
  }
  
}

//testing jwt working or not


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized:false,

}))
app.use(express.json());
//set default router
app.get("/", (req, res) => {
  res.send("Hello world happy hacking.......");
});


//register api routes
app.post("/register", (req, res) => {
   dataServices.register(
    req.body.accno,
    req.body.uname,
    req.body.password
   ).then(result => {
    res.status(result.statusCode).send(result);
  })
  
});

//login
app.post("/login", (req, res) => {
  dataServices.login(req.body.accno, req.body.pswd)
  .then(result => {
    res.status(result.statusCode).send(result);
  })
});


//deposit
app.post("/deposit",jwtMiddleware, (req, res) => {
    dataServices.deposit(
    req.body.acno,
    req.body.pswd,
    req.body.amnt
  )
  .then(result => {
    res.status(result.statusCode).send(result);
  })
});

//withdraw
app.post("/withdraw",jwtMiddleware, (req, res) => {
  dataServices.withdraw(
    req,
    req.body.acno,
    req.body.pswd,
    req.body.amnt
  ).then(result => {
    res.status(result.statusCode).send(result);
  })
});

app.post('/transaction',jwtMiddleware, (req, res) => {
    dataServices.getTransactions(req.body.acno).then(result => {
      res.status(result.statusCode).send(result);
    })
})

app.delete('/deleteAcc/:accno',jwtMiddleware, (req, res) => {
  dataServices.deleteAccount(req.params.accno).then(result => {
    res.status(result.statusCode).send(result)
  })
})

//set port number
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
