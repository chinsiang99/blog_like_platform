const { Router } = require("express");
const { getCreateBlog, createBlogPost } = require("../controller/blogController");
const validateToken = require("../middleware/validateTokenHandler");
const multer = require("multer");

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