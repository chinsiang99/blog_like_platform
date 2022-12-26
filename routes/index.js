const { Router } = require("express");
const registerRoutes = require("./registerRoutes");
const loginRoutes = require("./loginRoutes");
const homeRoutes = require("./homeRoutes");
const blogRoutes = require("./blogRoutes");

const router = Router();

router.use("/register/", registerRoutes);
router.use("/login/", loginRoutes);
router.use("/home/", homeRoutes);
router.use("/blog/", blogRoutes);

module.exports = router;