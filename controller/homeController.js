const asyncHandler = require("express-async-handler");
const { db } = require('../config/dbConnection');
const { collection, getDocs, query, orderBy, where } = require("firebase/firestore");

// get home page - get the blogpost being displayed
const getHomePage = asyncHandler(async (req,res,next)=>{

  // get blogpost collection
  const postCollection = collection(db, "blogpost");
  const postQuery = await query(postCollection, orderBy("timestamp"));
  const docsSnap = await getDocs(postQuery);
  const { offset } = req.query;
  const total_length = docsSnap.docs.length;
  let offset_value = offset ?? 0;
  let counter = 0;

  let next_offset = "";
  let prev_offset = "";
  if(offset_value == total_length-1){
    next_offset = -1;
    prev_offset = +offset_value -1;
    
  }else if(offset_value < total_length-1){
    next_offset = +offset_value + 1;
    prev_offset = +offset_value - 1;
  }

  if(total_length == 1 && offset_value == 0){
    prev_offset = -1;
    next_offset = -1;
  }

  let data = {
    id: "",
    title: "",
    description: "",
    user_email: "",
    curr_offset: offset_value ?? 0,
    next_offset: next_offset,
    image_url: "",
    prev_offset: prev_offset,
    total_length: total_length,
    current_user: req.user.user,
    current_user_id: req.user.uid,
    comments: 0,
    likes: false,
    like_id: 0
  };  

  if(offset_value > total_length){
    throw new Error("There are no further more records to be shown!");
  }
  let comment = "";
  docsSnap.forEach((doc) => {
    if(counter == offset_value){
      data.id = doc.id;
      data.title = doc.data().title;
      data.description = doc.data().description;
      data.user_email = doc.data().user_email;
      data.image_url = doc.data().image_url;
      comment = doc.data().comment;
    }
    counter++;
  })
  
  // get comments for the blogpost
  const commentCollection = collection(db, "comment");
  const commentQuery = await query(commentCollection, where("post_id", "==", data.id), orderBy("timestamp"));

  var comments = [];
  const commentSnapshot = await getDocs(commentQuery);
  const comment_length = commentSnapshot.docs.length;

  if(comment_length){
    commentSnapshot.forEach(doc=>{
      comments.push(doc.data());
    })
    data.comments = comments;
  }

  // get likes for the blogpost
  const likeCollection = collection(db, "like");
  const likeQuery = await query(likeCollection, where("post_id", "==", data.id));
  const likeSnapshot = await getDocs(likeQuery);
  const like_length = likeSnapshot.docs.length;

  if(like_length){
    likeSnapshot.forEach(doc=>{
      if(doc.data().user_uid == req.user.uid){
        data.like_id = doc.id;
        data.likes = true;
      }
    })
  }

  res.render("home", data);

});

module.exports = { getHomePage }