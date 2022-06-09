const express = require("express");
const router = express.Router();

const { films } = require("../../data.js");
let id = films.length;
router.get("/", (req, res) => {
  res.json({ films });
});

router.get("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  res.json({ film });
});

router.get("/error/:id", (req, res) => {
  const id = req.params.id;
  res.status(404);
  res.json({ error: `film id: ${id} does not exist` });
});

router.post("/", (req, res) => {
  id++;
  const film = { ...req.body, id: id };
  films.push(film);
  res.json({ film });
});

router.put("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  film.title = req.body.title;
  film.director = req.body.director;
  res.json({ film });
});

router.delete("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  index = films.indexOf(film);
  films.splice(index, 1);
  res.json({ film });
});

module.exports = router;
