const { Router } = require("express");
const { getHomePage } = require("../controller/homeController");
const validateToken = require("../middleware/validateTokenHandler");

const router = Router();

// route to get home page
router.route("/").get(
  validateToken, getHomePage
);

module.exports = router;