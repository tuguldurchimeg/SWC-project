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
app.get("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const place = await pool.query("SELECT * FROM places WHERE id = $1", [id]);
    res.json(place.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/users", (req, res) => {
  const username = req.params.username;
  pool.query("SELECT username,password FROM users", (err, result) => {
    if (!err) {
      if (result.rows.length > 0) {
        res.send(result.rows);
      } else {
        res.status(404).send('User not found');
      }
    } else {
      console.log(err.message);
      res.status(500).send('Internal Server Error');
    }
  });
});
// getting the password to check if the input password is matching
app.get("/users/login/:username", (req, res) => {
  const username = req.params.username;
  pool.query("SELECT password FROM users WHERE username=$1", [username], (err, result) => {
    if (!err) {
      if (result.rows.length > 0) {
        res.send(result.rows[0]);
      } else {
        res.status(404).send('User not found');
      }
    } else {
      console.log(err.message);
      res.status(500).send('Internal Server Error');
    }
  });
});
// update a place name
app.put("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { p_name } = req.body;
    const updatePlace = await pool.query(
      "UPDATE places SET p_name = $1 WHERE id = $2",
      [p_name, id]
    );
    res.json("place name was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// update an openhours
app.put("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { openhours } = req.body;
    const updateHours = await pool.query(
      "UPDATE places SET openhours = $1 WHERE id = $2",
      [openhours, id]
    );
    res.json("openhours was updated");
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
