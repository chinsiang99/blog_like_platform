const asyncHandler = require("express-async-handler");

// const {getAuth, signInWithEmailAndPassword} = require("firebase/auth");

const getCreateBlog = asyncHandler(async (req,res,next)=>{
  res.render("createpost")
});

module.exports = { getCreateBlog }