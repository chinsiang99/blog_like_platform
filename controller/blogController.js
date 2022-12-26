const asyncHandler = require("express-async-handler");

// const {getAuth, signInWithEmailAndPassword} = require("firebase/auth");

const { db } = require('../config/dbConnection');

const getCreateBlog = asyncHandler(async (req,res,next)=>{
  res.render("createpost")
});

const createBlogPost = asyncHandler(async (req,res,next)=>{

})

module.exports = { getCreateBlog }