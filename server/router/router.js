const express = require("express");
const router = express.Router();

router.route("/demo/api").get((req, res) => {
  res.json({
    success: true,
    message: "Welcome to the API",
  });
});

module.exports = router;
