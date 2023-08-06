import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import dotenv from "dotenv";
import todos from "./api/todos.route.js";
import TodosDAO from "./dao/todosDAO.js";

dotenv.config();

const app = express();
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/todos", todos);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

MongoClient.connect(process.env.TODOS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await TodosDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
