const { Router } = require("express");
const {
  signup_get,
  login_get,
  signup_post,
  login_post,
  logout_get,
} = require("../controllers/auth.controller");
const { CreateUser } = require("../controllers/user.controller");

const router = Router();

// router.get("/signup", signup_get);
router.post("/signup", signup_post);
// router.get("/login", login_get);
router.post("/login", login_post);
// router.get("/logout", logout_get);
router.post("/createUser", CreateUser);

module.exports = router;
