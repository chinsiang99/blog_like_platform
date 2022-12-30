const { Router } = require("express");
// const { getLoginPage, login } = require("../controller/loginController");
const { getCreateBlog, createBlogPost } = require("../controller/blogController");
const validateToken = require("../middleware/validateTokenHandler");
// const {createContact, getAllContacts, getSpecificContact, updateContact, deleteContact} = require("../controllers/contactController");
// const validateUserExists = require("../middleware/validateUserExist");
// const multer = require('multer');
const multer = require("multer");
// const upload = multer();
const multerStoreage = multer.memoryStorage();
const upload = multer({ storage: multerStoreage }).single("image");

const router = Router();
router.use(validateToken);

// route to create new blog post
router.route("/").get(
  getCreateBlog
);

router.post("/", upload, createBlogPost);

module.exports = router;