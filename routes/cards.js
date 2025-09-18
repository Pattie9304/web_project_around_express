const router = require("express").Router();
const {
  getCards,
  createCard,
  removeCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards");

cardsRouter.get("/cards", getCards);
cardsRouter.post("/cards", createCard);
cardsRouter.delete("/cards/:cardId", removeCard);
cardsRouter.put("/cards/:cardId/likes", likeCard);
cardsRouter.delete("/cards/:cardId/likes", dislikeCard);

module.exports = cardsRouter;
/*
const path = require("path");
const fs = require("fs").promises;

const cardsFile = path.join(__dirname, "../data/cards.json");

router.get("/", async (_, res) => {
try {
    const data = await fs.readFile(cardsFile, "utf8");
    res.json(JSON.parse(data));
}
catch (err) {
    res.status(500).json({message: "Error al leer los datos"});
}
});


module.exports = router;*/