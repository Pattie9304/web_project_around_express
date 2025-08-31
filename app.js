const express = require("express");
const usersRoutes = require("./routes/users.js");
const cardsRoutes = require("./routes/cards.js");

const app = express();
const PORT = 3000;

app.use("/users", usersRoutes);
app.use("/cards", cardsRoutes);

app.use((_, res) => {
    res.status(404).json({message: "Recurso solicitado no encontrado"});
});

app.listen(PORT, () => { console.log(`El servidor está corriendo en el puerto ${PORT}`); });