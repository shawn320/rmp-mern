const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/", routes);

// Database Connection
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database successfully connected!")
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
