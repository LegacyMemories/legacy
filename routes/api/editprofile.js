const router = require("express").Router();
const editProfileController = require("../../controllers/editProfileController");
console.log("in edit profile routes");
// Matches with "/api/editprofile"
router
  .route("/")
  .get(editProfileController.findAll)
  .post(editProfileController.create)
  .delete(editProfileController.remove);

// Matches with "/api/editprofile/:id"
router
  .route("/:id")
  .delete(editProfileController.removeItem)
  .put(editProfileController.update)
  .post(editProfileController.findOne);

module.exports = router;
