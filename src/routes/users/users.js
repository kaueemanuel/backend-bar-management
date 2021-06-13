var express = require("express");
var router = express.Router();
const userRepo = require("../../database/mysql/repositories/users");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const response = await userRepo.find();
    const count = await userRepo.count();
    res.send({ rows: response, count: count });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
