const asyncHandler = require("express-async-handler");

const {getAuth, signInWithEmailAndPassword} = require("firebase/auth");

const getLoginPage = asyncHandler(async (req,res,next)=>{
  res.render("login", {status: 200});
});

const login = asyncHandler(async (req,res,next)=>{
  const {email, password} = req.body;
  console.log(password, email);

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
  .then(cred=>{
    console.log("User logged in: ", cred.user);
  }).catch(error=>{
    const data = {
      status: 401,
      errorMessage: "User not found!",
    }
    
    console.log(error.message);
    if(error.code == "auth/wrong-password"){
      data.errorMessage = "Wrong password!";
      res.status(401).render('login', data);
    }else if(error.code == 'auth/user-not-found'){
      res.status(404).render('login', data);
    }
  });




  // const authentication = require("firebase/auth");
  // const firebaseAuth = require('../config/dbConnection');
  // const auth = authentication.getAuth(firebaseAuth);

  // try{
  //   const authorization = await authentication.signInWithEmailAndPassword(auth, email, password);
  // }catch(e){
  //   res.status(401);
  //   throw new Error("User not found!");
  // }
  
});

module.exports = { getLoginPage, login }