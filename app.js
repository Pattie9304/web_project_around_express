const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users.js");
const cardsRoutes = require("./routes/cards.js");

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use((req, res, next) => {
  req.user = {
    _id: "68cb6cb3c5ccd17e3ac0987a",
  };
  next();
});

app.use(express.json());
app.use("/", usersRouter);
app.use("/", cardsRouter);

app.listen(PORT, () => { console.log(`El servidor está corriendo en el puerto ${PORT}`); });

/*
app.use(express.json());
app.use(cors());


app.use("/users", usersRoutes);
app.use("/cards", cardsRoutes);

app.use((_, res) => {
    res.status(404).json({message: "Recurso solicitado no encontrado"});
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(user);
} );

app.get("/users/:userId", async (req, res) => {
    const userbyId = await User.findById();
    res.json(user);
});

app.post('/users', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar,
    });
    await newUser.save(); // Guarda el nuevo usuario en MongoDB
    res.status(201).send(newUser); // Envía el usuario creado como respuesta
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/cards", async (req, res) => {
    const cards = await Card.find();
    res.json(user);
} );

app.post('/cards', async (req, res) => {
  const { name, imageUrl, owner } = req.body; // Extraer datos del body

  try {
    // Asumiendo que ya tienes un modelo 'Card' y 'User'
    const user = await User.findById(owner); // Validar que el owner existe
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const newCard = new Card({
      name: name,
      imageUrl: imageUrl,
      owner: user._id // Guardar el ID del usuario
    });

    await newCard.save(); // Guardar la nueva tarjeta en MongoDB
    res.status(201).json(newCard); // Devolver la tarjeta creada
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/cards/:cardId", async (req, res) => {
    const cardbyId = await Card.findOne();
    res.json(user);
});

*/