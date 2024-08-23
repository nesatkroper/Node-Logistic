const db = require("../config/db");

// create a new function for get all records
const getUser = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.status(200).json(result[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const showUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    res.status(200).json(result[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// create a new function for create a new user
const createUser = async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res.status(400).send("Invalid username or password");
  }

  try {
    const result = await db.query(
      "INSERT INTO users (name, email, username, password) VALUES (?, ?, ?, ?)",
      [name, email, username, password]
    );

    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// create a new function for update a user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, username, password } = req.body;

  if (!id) {
    return res.status(400).send("invalid id");
  }

  try {
    const result = await db.query(
      "UPDATE users SET name = ?, email = ?, username = ?, password = ? WHERE id = ?",
      [name, email, username, password, id]
    );

    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// create new function for delete user
const removeUser = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send("invalid id");
  }

  try {
    const result = await db.query("DELETE FROM users WHERE id = ?", [id]);

    res.status(200).json({ message: "User delete successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getUser, showUser, createUser, updateUser, removeUser };
