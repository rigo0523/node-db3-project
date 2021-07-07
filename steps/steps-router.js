const express = require("express");
const router = express.Router();
const Steps = require("./steps-helper");

//GET /api/steps
router.use("/", (req, res, next) => {
  Steps.get()
    .then((step) => {
      res.status(200).json(step);
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Steps.getbyID(id)
    .then((car) => {
      res.json(car);
    })
    .catch((err) => next(err));
});

module.exports = router;
