const { Router } = require("express");
const { getLoginPage, login } = require("../controller/loginController");

const router = Router();

// route to get login page
router.route("/").get(
  getLoginPage
);

// route to login
router.route("/").post(
  login
);


module.exports = router;