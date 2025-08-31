const router = require("express").Router();
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


module.exports = router;