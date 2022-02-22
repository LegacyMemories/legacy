const router = require("express").Router();
const profileRoutes = require("./profile");

// Profile routes

console.log("in index file");
router.use("/profile", profileRoutes);

module.exports = router;
