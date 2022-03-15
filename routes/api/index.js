const router = require("express").Router();
const profileRoutes = require("./profile");
const editProfileRoutes = require("./editprofile");
// const authRoutes = require("../authRoutes");

// Profile routes

console.log("in index file");
router.use("/profile", profileRoutes);
router.use("/editprofile", editProfileRoutes);
// router.use("/auth", authRoutes)

module.exports = router;