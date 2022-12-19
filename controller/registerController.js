const asyncHandler = require("express-async-handler");

// const asyncHandler = require("express-async-handler");
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const {getAuth, createUserWithEmailAndPassword} = require("firebase/auth");

const getRegisterPage = asyncHandler(async (req,res,next)=>{
  res.render("signup", {status: 200});
});

const register = asyncHandler(async (req,res,next)=>{
  const {email, password} = req.body;

  const auth = getAuth();
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
  .then((cred)=>{
    console.log(`User created successfully : ${cred.user}`);
    res.render("login", {status: 200});
  })
  .catch(error=>{
    // res.render("signup", {status: 200});
    // console.log(error.code);
    if(error.code == 'auth/email-already-in-use'){
      const data = {
        status: 409,
        errorMessage: "Account Exists!"
      }
      res.render('signup', data);
    }
  });


  // console.log(password, email);
  // console.log("CREATE NEW ACCOUNT INCOMING!");
  // const authentication = require("firebase/auth");
  // const firebaseAuth = require('../config/dbConnection');
  // console.log(firebaseAuth);
  // const auth = authentication.getAuth(firebaseAuth);
  // console.log(auth);
  // try{
  //   const createUser = authentication.createUserWithEmailAndPassword(auth, email, password);
  // }catch(e){
  //   res.status(409);
  //   throw new Error("Account already exists!");
  // }
  
});

module.exports = { getRegisterPage, register }