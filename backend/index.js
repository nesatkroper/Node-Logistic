const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db");
const router = require("./routes/router");

dotenv.config();
const app = express();
db.connect;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);

const port = process.env.DB_PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}/api/`);
});
