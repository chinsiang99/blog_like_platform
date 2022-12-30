const asyncHandler = require("express-async-handler");
const { db } = require('../config/dbConnection');
const { collection, addDoc } = require("firebase/firestore");

// adding comment to the specific post
const addComment = asyncHandler(async (req,res)=>{
  const { comment, current_user_id, current_user_email, post_id, curr_offset } = req.body;

  const timestamp = Date.now();

  let data = {
    post_id: post_id,
    comment: comment,
    user_uid: current_user_id,
    user_email: current_user_email,
    timestamp: timestamp
  }

  const commentCollection = collection(db, "comment");

  const add_successful = await addDoc(commentCollection, data);

  res.redirect(`home?offset=${curr_offset}`);
})

module.exports = { addComment }