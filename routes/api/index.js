const router = require("express").Router();
const profileRoutes = require("./profile");
// const authRoutes = require("../authRoutes");

// Profile routes

console.log("in index file");
router.use("/profile", profileRoutes);
// router.use("/auth", authRoutes)



module.exports = router;
