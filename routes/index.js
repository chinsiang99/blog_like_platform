const { Router } = require("express");
const registerRoutes = require("./registerRoutes");
const loginRoutes = require("./loginRoutes");
const homeRoutes = require("./homeRoutes");
const blogRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");
const likeRoutes = require("./likeRoutes");

const router = Router();

// registering routes here
router.use("/register/", registerRoutes);
router.use("/login/", loginRoutes);
router.use("/home/", homeRoutes);
router.use("/blog/", blogRoutes);
router.use("/comment/", commentRoutes);
router.use("/like/", likeRoutes);

module.exports = router;