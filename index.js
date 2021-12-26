const express = require("express");
const app = express();
const port = 5001;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://gusehd66:gus7213@boilerplate.boomm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Conneted..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

app.listen(port, () => console.log(`listening ${port} port`));
