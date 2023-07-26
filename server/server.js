const express = require("express");
const app = express();
const PORT = 5000;

const router = require("./router/router");
//middleware
app.use(express.json()); //to use json data send by user
//routes
app.use("api/v1", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
