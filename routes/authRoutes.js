const router = require("express").Router();
const passport = require("passport");

router.route("/auth/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.route("/auth/google/callback").get(passport.authenticate("google"));
console.log("routes file");

router.get("/api/current_user",(req,res) =>{
  res.send(req.user)
})
// module.exports = (app) => {
//  router.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   })
// );
// router.get("/auth/google/callback", passport.authenticate("google"));
// };

module.exports = router;
