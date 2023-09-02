const express = require("express");
const app = express();
const indexrouter = require("./routes");

app.use("/", indexrouter);

app.listen(3232, () => {
  console.log("Server is running in port 3232");
});
