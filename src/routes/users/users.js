var express = require("express");
var router = express.Router();
const UserController = require("../../controllers/User");
const user = new UserController();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const response = await user.find(req.query);
    res.send(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
