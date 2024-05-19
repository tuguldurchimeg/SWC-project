import express from "express";
import cors from "cors";
import pool from "./db.mjs";
import jwt from "jsonwebtoken";
import axios from "axios";
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

// delete a place
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

// LOGIN auth
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const secretKey = "secret-key-black";
  // Fetch user data from the API
  const response = await axios.get(
    `http://localhost:5000/users/login/${username}`
  );
  const user = response.data;
  // Check if the entered username and password match any user in the database
  if (!user)
    return res
      .status(400)
      .json({ message: "Email or password does not match" });
  if (!user || user.password !== password) {
    return res
      .status(400)
      .json({ message: "Email or password does not match" });
  }

  const jwtToken = jwt.sign(
    {
      id: user.user_id,
      username: user.username,
    },
    secretKey,
    { expiresIn: "1h" }
  );
  res.json({ user: user, token: jwtToken });
});

// GET all user datas
app.get("/allusers", (req, res) => {
  pool.query("SELECT * FROM users", (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
});

// POST user data / register user
app.post("/users", (req, res) => {
  const { user_id, password, username, phone, address } = req.body;
  pool.query(
    "INSERT INTO users(user_id,password,username,phone,address) values($1,$2,$3,$4,$5)",
    [user_id, password, username, phone, address],
    (err, result) => {
      if (!err) {
        res.status(201).send(result.rows);
      } else {
        res.status(500).send(err.message);
      }
    }
  );
});

// getting the password to check if the input password is matching
app.get("/users/login/:username", (req, res) => {
  const username = req.params.username;
  pool.query(
    "SELECT user_id, username, password FROM users WHERE username=$1",
    [username],
    (err, result) => {
      if (!err) {
        if (result.rows.length > 0) {
          res.send(result.rows[0]);
        } else {
          res.status(404).send("User not found");
        }
      } else {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );
});
// get username by id
app.get("/users/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  pool.query(
    "SELECT username FROM users WHERE user_id=$1",
    [user_id],
    (err, result) => {
      if (!err) {
        if (result.rows.length > 0) {
          res.send(result.rows[0]);
        } else {
          res.status(404).send("User not found");
        }
      } else {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );
});

// SAVED ITEMS post
app.post("/saveditems", async (req, res) => {
  try {
    const { user_id, food_id, place_id } = req.body;
    const newPlace = await pool.query(
      "INSERT INTO saveditems (user_id, food_id, place_id) VALUES($1, $2, $3) RETURNING *",
      [user_id, food_id, place_id]
    );
    res.json(newPlace.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// get saved items
app.get("/saveditems/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const item = await pool.query(
      "SELECT * FROM saveditems WHERE user_id = $1",
      [user_id]
    );
    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/saveditems/:item_id", async (req, res) => {
  try {
    const { item_id } = req.params;
    const deletePlace = await pool.query(
      "DELETE FROM saveditems WHERE food_id = $1 OR place_id = $1",
      [item_id]
    );
    res.json("Place was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

// POST Comment
app.post("/comments", async (req, res) => {
  try {
    const { user_id, place_id, datew, rate, comment } = req.body;
    const newPlace = await pool.query(
      "INSERT INTO comments (user_id, place_id, datew, rate, comment) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [user_id, place_id, datew, rate, comment]
    );
    res.json(newPlace.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// GET Comments of place
app.get("/comments/:place_id", async (req, res) => {
  try {
    const { place_id } = req.params;
    const item = await pool.query(
      "SELECT * FROM comments WHERE place_id = $1",
      [place_id]
    );
    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// FOODS post
app.post("/foods", async (req, res) => {
  try {
    const { id, place_id, f_name, portion, price, calories, totalRate } =
      req.body;
    const newPlace = await pool.query(
      "INSERT INTO foods (id,place_id, f_name, portion, price, calories, totalRate) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [id, place_id, f_name, portion, price, calories, totalRate]
    );
    res.json(newPlace.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// GET Foods by place_id
app.get("/foods/:place_id", async (req, res) => {
  try {
    const { place_id } = req.params;
    const item = await pool.query("SELECT * FROM foods WHERE place_id = $1", [
      place_id,
    ]);
    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// GET Foods by food_id
app.get("/foods/:food_id", async (req, res) => {
  try {
    const { food_id } = req.params;
    const item = await pool.query("SELECT * FROM foods WHERE food_id = $1", [
      food_id,
    ]);
    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
