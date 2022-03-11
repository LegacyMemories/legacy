const router = require("express").Router();
const profileController = require("../../controllers/profileController");
console.log("in profile routes");
// Matches with "/api/profile"
router
  .route("/")
  .get(profileController.findAll)
  .post(profileController.create)
  .delete(profileController.remove);

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .delete(profileController.removeItem)
  .put(profileController.update)
  .post(profileController.findOne);

module.exports = router;
