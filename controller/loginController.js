const asyncHandler = require("express-async-handler");

const { db } = require('../config/dbConnection');

const {getAuth, signInWithEmailAndPassword} = require("firebase/auth");

const jwt = require("jsonwebtoken");

// to get login page
const getLoginPage = asyncHandler(async (req,res,next)=>{
  res.render("login", {status: 200});
});

// to login the user
const login = asyncHandler(async (req,res,next)=>{
  const {email, password} = req.body;

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
  .then(cred=>{
    const accessToken = jwt.sign(
      {
          user: {
              user: cred.user.email,
              uid: cred.user.uid
          },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "24h" }
    );
    res.cookie('jwt_auth', accessToken);
    res.redirect('home');
  }).catch(error=>{
    const data = {
      status: 401,
      errorMessage: "User not found!",
    };

    if(error.code == "auth/wrong-password"){
      data.errorMessage = "Wrong password!";
      res.status(401).render('login', data);
    }else if(error.code == 'auth/user-not-found'){
      res.status(404).render('login', data);
    }else if(error.code == 'auth/too-many-requests'){
      data.errorMessage = "Too many request! Try again later";
      res.status(429).render('login', data);
    }
  });
  
});

module.exports = { getLoginPage, login }