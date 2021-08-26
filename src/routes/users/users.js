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

/* POST user create. */
router.post("/", async function (req, res, next) {
  try {
    const response = await user.create(req.body);
    res.send(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* PUT user update. */
router.put("/:id", async function (req, res, next) {
  console.log(req.params)
  if (!req.params.id || isNaN(req.params.id) || req.params.id < 1) {
    return res.status(400).json({ message: "id not found", status: 400});
  }
  try {
    const response = await user.update(req.body, req.params);
    res.send(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/* DELETE users delete. */
router.delete("/", async function (req, res, next) {
  if (!req.body.ids || !Array.isArray(req.body.ids) || !req.body.ids.length) {
    return res.status(400).json({ message: "Ids not valids", status: 400});
  }
  try {
    const response = await user.delete(req.body.ids);
    res.status(204).send(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
