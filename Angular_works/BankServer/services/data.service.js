data={
    1000:{accno:1000,password:"123",uname:"Adarsh",balance:5000,transactions:[]},
    1001 :{accno:1001,password:"123",uname:"Sree",balance:5000,transactions:[]},
  }

  //registration service
  const register=(accno,uname,pswd)=>{
    
    if(accno in data){
      return {
          status:false,
          statusCode:401,
          message:"Account already exists please login..."
      }
    }else{
        data[accno]={
        accno,
        password:pswd,
        uname:uname,
        balance:0,
        transactions:[]
      }
      return {
          status:true,
          statusCode:200,
          message:"Account created successfully..."
      };
    }
  }

  //login function
  const login=(acno,pswd)=>{
    if(acno in data){
      if(pswd==data[acno].password){
        currentUser=data[acno].uname;

        return {
          status:true,
          statusCode:200,
          message:"Login successful...",
          currentUser:currentUser,
          currentAcno:acno
      };

      }else{
        return {
          status:false,
          statusCode:401,
          message:"Invalid Password..."
      }
       
      }
    }
    else{
      return {
        status:false,
        statusCode:401,
        message:"User doesn't exist"
    }
    }
  }

  //deposit function
  const deposit=(acno,pass,amnt)=>{
    let amount = parseInt(amnt);
    let date = new Date().toDateString();
    let time = new Date().toTimeString();
    if(acno in data){
      if(data[acno].password==pass){
        data[acno].balance+=amount
        data[acno]["transactions"].push({
          amount:amount,
          type:"Credit",
          date:date,
          time:time
        })
        return  {
          status:true,
          statusCode:200,
          message:`${amount} credited New balance is ${data[acno].balance}`,

      }
      }else{
        
        return  {
        status:false,
        statusCode:401,
        message:"Invalid password"
    };
      }
    }else{
      
      return  {
        status:false,
        statusCode:401,
        message:"User doesn't exist"
    };
    }
  }

  //withdraw function 
  const withdraw=(acno,pass,amnt)=>{
    let db = data;
    let date = new Date().toDateString()
    let temp_time = new Date()
    let hr = temp_time.getHours();
    let min = temp_time.getMinutes();
    let sec = temp_time.getSeconds();
    let am_or_pm=()=>{hr>12?"pm":"am"}
    
    let time = `${hr}:${min}:${sec} ${am_or_pm}`
    let amount = parseInt(amnt)
    if(acno in db){
      if(db[acno].password==pass){
        if(amount<db[acno].balance){
          db[acno].balance-=amount
          db[acno]["transactions"].push({
            amount:amount,
            type:"Debit",
            date:date,
            time:time
          })
          return {
            status:true,
            statusCode:200,
            message:`${amount} Debited New balance is ${data[acno].balance}`,
        }
        }else{
          
          return {
            status:false,
            statusCode:401,
            message:"Insuffcient balance"
        };
        }
        
      }else{
      
        return {
          status:false,
          statusCode:401,
          message:"Invalid password"
      };
      }
    }else{
      return {
        status:false,
        statusCode:401,
        message:"User doesn't exist"
    };
    }
  }


module.exports={
    register,login,deposit,withdraw
}