const express = require("express");
const router = express.Router();

const {
  getUser,
  showUser,
  createUser,
  updateUser,
  removeUser,
} = require("../controller/UserController");

// UserController
router.get("/user", getUser);
router.post("/user.create", createUser);
router.get("/user.show/:id", showUser);
router.put("/user.update/:id", updateUser);
router.delete("/user.remove/:id", removeUser);

module.exports = router;
