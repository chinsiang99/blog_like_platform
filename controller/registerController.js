const asyncHandler = require("express-async-handler");

const { db } = require('../config/dbConnection');

const {getAuth, createUserWithEmailAndPassword} = require("firebase/auth");

// to get register page
const getRegisterPage = asyncHandler(async (req,res,next)=>{
  res.render("signup", {status: 200});
});

// to create a new account
const register = asyncHandler(async (req,res,next)=>{
  const {email, password} = req.body;

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
  .then((cred)=>{
    console.log(`User created successfully : ${cred.user}`);
    res.render("login", {status: 200});
  })
  .catch(error=>{
    if(error.code == 'auth/email-already-in-use'){
      const data = {
        status: 409,
        errorMessage: "Account Exists!"
      }
      res.render('signup', data);
    }
  });
  
});

module.exports = { getRegisterPage, register }