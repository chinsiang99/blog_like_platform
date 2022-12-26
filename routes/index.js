const { Router } = require("express");
const registerRoutes = require("./registerRoutes");
const loginRoutes = require("./loginRoutes");
const mainRoutes = require("./mainRoutes");
const blogRoutes = require("./blogRoutes");

const router = Router();

router.use("/register/", registerRoutes);
router.use("/login/", loginRoutes);
router.use("/main/", mainRoutes);
router.use("/blog/", blogRoutes);

module.exports = router;