const { Router } = require("express");
const { container } = require("../container");
const router = new Router();

router.get("", async (req, res) => {
  const service = container.get("BOOKS_SERVICE");
  const books = await service.findAll();
  res.json(books);
});

router.post("", async (req, res) => {
  const service = container.get("BOOKS_SERVICE");
  const book = service.create(req.body);
  res.json(book);
});

module.exports = router;
