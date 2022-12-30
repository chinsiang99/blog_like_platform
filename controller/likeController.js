const asyncHandler = require("express-async-handler");
const { db } = require('../config/dbConnection');
const { collection, doc, addDoc, deleteDoc } = require("firebase/firestore");


// add like document
const addLike = asyncHandler(async (req,res)=>{
  const { current_user_id, post_id, curr_offset } = req.body;

  let data = {
    user_uid: current_user_id,
    post_id: post_id,
  }

  const commentCollection = collection(db, "like");

  const add_successful = await addDoc(commentCollection, data);

  res.redirect(`home?offset=${curr_offset}`);

})

// delete like document
const deleteLike = asyncHandler(async (req,res)=>{
  const { like_id, curr_offset } = req.body;

  const likeCollection = doc(db, "like", `${like_id}`);

  const delete_successful = await deleteDoc(likeCollection);

  res.redirect(`../home?offset=${curr_offset}`);

})

module.exports = { addLike, deleteLike }