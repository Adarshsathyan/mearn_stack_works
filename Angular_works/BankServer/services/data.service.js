const jwt = require('jsonwebtoken');
const db = require('./db');

data = {
  1000: {
    accno: 1000,
    password: "123",
    uname: "Adarsh",
    balance: 5000,
    transactions: [],
  },
  1001: {
    accno: 1001,
    password: "123",
    uname: "Sree",
    balance: 5000,
    transactions: [],
  },
};


//registration service
const register = (accno, uname, pswd) => {
  return db.User.findOne({ accno })
    .then(user => {
      if (user) {
        return {
          status: false,
          statusCode: 401,
          message: "Account already exists please login...",
        };
      } else {
        const newUser = new db.User({
          accno: accno,
          password: pswd,
          uname: uname,
          balance: 0,
          transactions: [],
        })
        newUser.save();
        return {
          status: true,
          statusCode: 200,
          message: "Account created successfully...",
        };
      }
     
  })
  
};

//login function
const login = (accno, password) => {
  return db.User.findOne({ accno, password }).then(user => {
    if (user) {
      currentUser = user.uname
      const token = jwt.sign({
        currentAcno :accno
      },'helloworld')
      return {
        status: true,
        statusCode: 200,
        message: "Login successful...",
        currentUser: currentUser,
        currentAcno: accno,
        token
      };
    } else {
      return {
        status: false,
        statusCode: 401,
        message: "Invalid account number / password..",
      }
    }
    
  })
  
};

//deposit function
const deposit = (accno, password, amnt) => {
  return db.User.findOne({ accno, password })
    .then(user => {
      if (user) {
        let amount = parseInt(amnt);
  
        let date = new Date().toDateString();
        let temp_time = new Date();
        let hr = temp_time.getHours();
        let min = temp_time.getMinutes();
        let sec = temp_time.getSeconds();
        let am_or_pm = "";
        let getAmPm = () => {
          if (hr >= 12) {
            am_or_pm = "pm";
          } else {
            am_or_pm = "am";
          }
        };
        getAmPm();
    
        let time = `${hr}:${min}:${sec} ${am_or_pm}`;
        user.balance += amount;
        user["transactions"].push({
          amount: amount,
          type: "Credit",
          date: date,
          time: time,
        });
        user.save();
        return {
          status: true,
          statusCode: 200,
          message: `${amount} credited New balance is ${user.balance}`,
        };
      } else {
        return {
          status: false,
          statusCode: 401,
          message: "User doesn't exist",
        };
    }
  })
  
    
  
};

//withdraw function
const withdraw = (req,accno, password, amnt) => {
  return db.User.findOne({ accno,password })
    .then(user => {
      if (req.currentAcno != accno) {
        return {
          status: false,
          statusCode: 401,
          message: "Please login as the user",
        };
      }

      if (user) {
      let date = new Date().toDateString();
      let temp_time = new Date();
      let hr = temp_time.getHours();
      let min = temp_time.getMinutes();
      let sec = temp_time.getSeconds();
      let am_or_pm = "";
      let getAmPm = () => {
        if (hr >= 12) {
          am_or_pm = "pm";
        } else {
          am_or_pm = "am";
        }
      };
      getAmPm();
    
      let time = `${hr}:${min}:${sec} ${am_or_pm}`;
        let amount = parseInt(amnt);
        if (user.balance > amount) {
          user.balance-=amount;
          user["transactions"].push({
            amount: amount,
            type: "Debit",
            date: date,
            time: time,
          })
          user.save();
          return {
            status: true,
            statusCode: 200,
            message: `${amount} Debited New balance is ${user.balance}`,
          };
        } else {
          return {
            status: false,
            statusCode: 401,
            message: "Insuffcient balance",
          };
        }
      }
      else {
        return {
          status: false,
          statusCode: 401,
          message: "Invalid account number / password",
        };
      }
      
  })
};

//get transactions
const getTransactions = (accno) => {
  return db.User.findOne({ accno })
    .then(user => {
      if (user) {
        return {
          status: true,
          statusCode: 200,
          transactions: user.transactions,
        };
      } else {
        return {
          status: false,
          statusCode: 401,
          message: "User doesn't exist",
        };
    }
  })
  
};

const deleteAccount = (accno) => {
  return db.User.deleteOne({ accno }).then((res) => {
    console.log(res);
    if (!res) {
      return {
        status: false,
        statusCode: 401,
        message: "User doesn't exist",
      };
    }
    else {
      return {
        status: true,
        statusCode: 200,
        message: `Account number ${accno} have deleted successfully!!!`,
      };
    }
  })
}

module.exports = {
  register,
  login,
  deposit,
  withdraw,
  getTransactions,
  deleteAccount,
};
