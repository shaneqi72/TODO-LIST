const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 4003;

app.use(bodyParser.json());

app.use(cors());

app.use("", routes);

app.listen(port, () => {
  console.log(`To Do app listening at http://localhost:${port}`);
});
