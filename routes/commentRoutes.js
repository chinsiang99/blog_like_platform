const { Router } = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const { addComment } = require("../controller/commentController");

const router = Router();
router.use(validateToken);

// route to add comment to the blog post
router.route("/").post(
  addComment
);

module.exports = router;