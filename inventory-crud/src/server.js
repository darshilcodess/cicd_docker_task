const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/items", async (req, res) => {
  const result = await pool.query("SELECT * FROM inventory");
  res.json(result.rows);
});

app.post("/items", async (req, res) => {
  const { item_name, quantity, price } = req.body;
  const result = await pool.query(
    "INSERT INTO inventory (item_name, quantity, price) VALUES ($1,$2,$3) RETURNING *",
    [item_name, quantity, price]
  );
  res.json(result.rows[0]);
});

app.put("/items/:id", async (req, res) => {
  const { quantity, price } = req.body;
  const { id } = req.params;
  await pool.query(
    "UPDATE inventory SET quantity=$1, price=$2 WHERE id=$3",
    [quantity, price, id]
  );
  res.json({ message: "Updated" });
});

app.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM inventory WHERE id=$1", [id]);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
