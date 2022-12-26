const asyncHandler = require("express-async-handler");

// const {getAuth, signInWithEmailAndPassword} = require("firebase/auth");

const getCreateBlog = asyncHandler(async (req,res,next)=>{
  res.render("createpost")
});

const createBlogPost = asyncHandler(async (req,res,next)=>{
  
})

module.exports = { getCreateBlog }