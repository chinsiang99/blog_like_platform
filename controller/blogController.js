const asyncHandler = require("express-async-handler");

const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const { collection, addDoc } = require("firebase/firestore");

const { db } = require('../config/dbConnection');

const getCreateBlog = asyncHandler(async (req,res,next)=>{
  res.render("createpost")
});

const createBlogPost = asyncHandler(async (req,res,next)=>{

  const storage = getStorage();
  const timestamp = Date.now();

  const fileName = req.file.originalname + "_" + timestamp;

  const { user, uid } = req.user;

  const { post_title, post_description } = req.body;

  let data = {
    title: post_title ?? "",
    description: post_description ?? "",
    image_url: "",
    user_email: user,
    user_uid: uid,
    timestamp: timestamp
  }
  const postCollection = collection(db, "blogpost");

  const storageRef = ref(storage, fileName, req.file.mimetype);

  const metadata = {
    contentType: req.file.mimetype,
  };

  const uploadTask = uploadBytesResumable(
    storageRef,
    req.file.buffer,
    metadata
  );

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const uploaded = Math.floor(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    },
    (error) => {
      console.log(error);
    },
    async () => {
      imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
      data.image_url = imageUrl;
      addDoc(postCollection, data)
      .then(data=>{
        console.log("successfully added!");
        res.redirect('home');
      })
      .catch(err=>{
        console.log(err.message);
      });
    }
  );
})

module.exports = { getCreateBlog, createBlogPost }