const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogDB")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(err));

// Modelo de Post
const Post = mongoose.model("Post", {
  titulo: String,
  contenido: String
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("teayudamos jeje");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Obtener posts
app.get("/posts", (req, res) => {
  res.json([{ id: 1, titulo: "Mi primer post", contenido: "Hola mundo" }]);
});

// Crear un post
app.post("/posts", (req, res) => {
  const nuevoPost = req.body;
  res.json({ mensaje: "Post creado", post: nuevoPost });
});

// Obtener posts desde MongoDB
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Crear post en MongoDB
app.post("/posts", async (req, res) => {
  const nuevoPost = new Post(req.body);
  await nuevoPost.save();
  res.json({ mensaje: "Post creado", post: nuevoPost });
});

