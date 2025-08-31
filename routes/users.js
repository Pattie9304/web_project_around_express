
const router = require("express").Router();
const path = require("path");
const fs = require("fs").promises;

const usersFile = path.join(__dirname, "../data/users.json");

router.get("/", async (_, res) => {
try {
    const data = await fs.readFile(usersFile, "utf8");
    res.json(JSON.parse(data));
}
catch (err) {
    res.status(500).json({message: "Error al leer los datos"});
}
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const data = await fs.readFile(usersFile, "utf8");
        const users = JSON.parse(data);
        const user = users.find( (u) => u._id === id);
        if(!user) { res.status(404).json({ message: "ID de usuario no encontrado"}); }
        
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({message: "Error al leer los datos"});
    }
});

module.exports = router;