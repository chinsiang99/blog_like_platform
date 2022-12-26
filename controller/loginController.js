const asyncHandler = require("express-async-handler");

const {getAuth, signInWithEmailAndPassword} = require("firebase/auth");

const jwt = require("jsonwebtoken");

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
    console.log(cred.user.uid);
    const accessToken = jwt.sign(
      {
          user: {
              uid: cred.user.uid,
          },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "24h" }
    );
    res.cookie('jwt_auth', accessToken);
    console.log("WOWWW");
    res.status(200).render('main');
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
    }else if(error.code == 'auth/too-many-requests'){
      data.errorMessage = "Too many request! Try again later";
      res.status(429).render('login', data);
    }
  });
  
});

module.exports = { getLoginPage, login }