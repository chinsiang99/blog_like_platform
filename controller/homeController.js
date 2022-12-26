const asyncHandler = require("express-async-handler");
const { db } = require('../config/dbConnection');
// const {getDocs, doc} = require('firebase');
const { collection, doc, setDoc, getDocs, query, orderBy, limit, arrayRemove, where, onSnapshot } = require("firebase/firestore");

const getHomePage = asyncHandler(async (req,res,next)=>{
  console.log("HELLO THERE!");
  // console.log(db);

  const postCollection = collection(db, "blogpost");
  const docsSnap = await getDocs(postCollection);
  // console.log(typeof docsSnap);
  // console.log(docsSnap.docs.length);
  const total_length = docsSnap.docs.length;
  const result = await query(postCollection,
    limit(25), offset(1));
  // console.log(typeof result);
  // console.log(result.docs.length);

  onSnapshot(result, (snapshot)=>{
    if(snapshot.docs.length){

    }else{
      console.log("gg");
    }
    console.log(snapshot.docs.length);
  })
  
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


  res.render("home", {status: 200});
});

module.exports = { getHomePage }