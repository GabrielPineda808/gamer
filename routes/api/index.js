const router = require("express").Router();
const passport = require('../../Config/passport')
const userController = require('../../Controllers/userController')

router.post('/login', passport.authenticate('local'), userController.login)
router.post("/signup", userController.signUp);
router.get("/logout", userController.logout);

module.exports = router;