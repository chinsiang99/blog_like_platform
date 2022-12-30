const { Router } = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const { addLike, deleteLike } = require("../controller/likeController");

const router = Router();
router.use(validateToken);

// route to like blog post
router.route("/").post(
  addLike
);

// route to unlike blog post
router.route("/unlike").post(
  deleteLike
);


module.exports = router;