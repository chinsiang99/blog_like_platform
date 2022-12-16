const { Router } = require("express");
const registerRoutes = require("./registerRoutes");
const loginRoutes = require("./loginRoutes");
const mainRoutes = require("./mainRoutes");

const router = Router();

router.use("/register/", registerRoutes);
router.use("/login/", loginRoutes);
router.use("/main/", mainRoutes);

module.exports = router;