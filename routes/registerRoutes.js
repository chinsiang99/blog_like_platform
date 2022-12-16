const { Router } = require("express");
const { getRegisterPage, register } = require("../controller/registerController");
// const validateToken = require("../middleware/validateTokenHandler");
// const {createContact, getAllContacts, getSpecificContact, updateContact, deleteContact} = require("../controllers/contactController");
// const validateUserExists = require("../middleware/validateUserExist");

const router = Router();

// define routes after the "/contacts/" prefix
// api/contacts/

// since all the endpoint inside contact route should be private, so every endpoint will have to gone through validate token middleware and validate whether the user exists
// router.use(validateToken);
// router.use(validateUserExists);

// route to get register page
router.route("/").get(
  getRegisterPage
);

// route to create a new account
router.route("/").post(
  register
);


module.exports = router;