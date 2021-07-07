const express = require("express");
const router = express.Router();

//localhost:5000/
router.get("/", (req, res, next) => {
  res.status(200).json({ API: "Api up and running" });
});

module.exports = router;
