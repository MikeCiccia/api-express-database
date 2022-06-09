const express = require("express");
const router = express.Router();

const { users } = require("../../data.js");
let id = users.length;
router.get("/", (req, res) => {
  res.json({ users });
});

router.get("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  res.json({ user });
});

router.post("/", (req, res) => {
  id++;
  const user = { ...req.body, id: id };
  users.push(user);
  res.json({ user });
});

router.put("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  user.email = req.body.email;
  res.json({ user });
});

router.delete("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  index = users.indexOf(user);
  users.splice(index, 1);
  res.json({ user });
});

router.get("/error/:id", (req, res) => {
  const id = req.params.id;
  res.status(404);
  res.json({ error: `user id: ${id} does not exist` });
});

module.exports = router;