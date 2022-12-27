const asyncHandler = require("express-async-handler");
const { db } = require('../config/dbConnection');
// const {getDocs, doc} = require('firebase');
const { collection, doc, setDoc, getDocs, query, orderBy, limit, arrayRemove, where, onSnapshot } = require("firebase/firestore");

const getHomePage = asyncHandler(async (req,res,next)=>{
  console.log("HELLO THERE!");
  // console.log(db);

  const postCollection = collection(db, "blogpost");
  const docsSnap = await getDocs(postCollection);
  const { offset } = req.query;
  // console.log(typeof docsSnap);
  // console.log(docsSnap.docs.length);
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
    next_offset: next_offset,
    prev_offset: prev_offset,
    total_length: total_length
  };  

  // console.log(docsSnap);

  if(offset_value > total_length){
    throw new Error("There are no further more records to be shown!");
  }

  docsSnap.forEach((doc) => {
    if(counter == offset_value){
      data.id = doc.id;
      data.title = doc.data().title;
      data.description = doc.data().description;
      data.user_email = doc.data().user_email;
      console.log(data);
    }
    counter++;
  })

  // const result = await query(postCollection,
  //   limit(25), offset(1));
  // console.log(typeof result);
  // console.log(result.docs.length);

  // onSnapshot(result, (snapshot)=>{
  //   if(snapshot.docs.length){

  //   }else{
  //     console.log("gg");
  //   }
  //   console.log(snapshot.docs.length);
  // })
  
  // result.forEach(doc => {
  //   console.log(doc.id);
  //   console.log(doc.data());
  // })
  // docsSnap.forEach(doc => {
  //   console.log(doc.id);
  //   console.log(doc.data());
  // })
  // const blogpost = await db.collection('blogpost').get();
  // db.collection('users').doc(''+ sender_id).get().then(function(doc) {
  //   console.log(doc.data().name);
  // });
  // console.log(blogpost);

  // const q = query(postCollection, limit(25));
  
  

  // console.log(q.empty);


  res.render("home", data);
});

module.exports = { getHomePage }