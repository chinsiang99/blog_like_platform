const asyncHandler = require("express-async-handler");
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const getLoginPage = asyncHandler(async (req,res,next)=>{
  res.render("login", {status: 200});
});

const login = asyncHandler(async (req,res,next)=>{
  const {email, password} = req.body;
  console.log(password, email);

  const auth = getAuth();



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