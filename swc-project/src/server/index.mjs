import express from "express";
import cors from "cors";
import pool from "./db.mjs";
const app = express();

//middleware
app.use(cors());
app.use(express.json()); // req.body

//ROUTES//

//create a place
app.post("/places", async (req, res) => {
  try {
    const {
      id,
      p_name,
      link,
      phone,
      p_address,
      p_type,
      openhours,
      capacity,
      description,
      totalRate,
    } = req.body;
    const newPlace = await pool.query(
      "INSERT INTO places (id, p_name, link, phone, p_address, p_type, openhours, capacity, description, totalRate) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        id,
        p_name,
        link,
        phone,
        p_address,
        p_type,
        openhours,
        capacity,
        description,
        totalRate,
      ]
    );
    res.json(newPlace.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all places
app.get("/places", async (req, res) => {
  try {
    const allPlaces = await pool.query("SELECT * FROM places");
    res.json(allPlaces.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a place
app.get("/places/:p_name", async (req, res) => {
  try {
    const { p_name } = req.params;
    const place = await pool.query("SELECT * FROM places WHERE p_name = $1", [
      p_name,
    ]);
    res.json(place.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a place
app.put("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { p_name } = req.body;
    const updatePlace = await pool.query(
      "UPDATE places SET p_name = $1 WHERE id = $2",
      [p_name, id]
    );
    res.json("place was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete
app.delete("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlace = await pool.query("DELETE FROM places WHERE id = $1", [
      id,
    ]);
    res.json("Place was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
