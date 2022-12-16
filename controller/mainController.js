const asyncHandler = require("express-async-handler");


const getMainPage = asyncHandler(async (req,res,next)=>{
  res.render("main", {status: 200});
});

module.exports = { getMainPage }