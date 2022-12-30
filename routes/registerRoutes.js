const { Router } = require("express");
const { getRegisterPage, register } = require("../controller/registerController");

const router = Router();

// route to get register page
router.route("/").get(
  getRegisterPage
);

// route to create a new account
router.route("/").post(
  register
);


module.exports = router;