const express = require("express");
const router = express.Router();
const Steps = require("./steps-helper");

//GET /api/steps
router.get("/", (req, res, next) => {
  Steps.get()
    .then((step) => {
      res.status(200).json(step);
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log("test--->", id);
  Steps.getbyID(id)
    .then((car) => {
      car
        ? res.status(200).json(car)
        : res.status(401).json({ message: `can't find id of ${id}` });
    })
    .catch((err) => next(err));
});

module.exports = router;
