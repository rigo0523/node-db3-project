const express = require("express");
const router = express.Router();
const Steps = require("./steps-helper");
const {
  checkByID,
  stepsValidation,
} = require("../middleware/middleware-stacks");

//GET /api/steps
router.get("/", (req, res, next) => {
  Steps.get()
    .then((step) => {
      res.status(200).json(step);
    })
    .catch((err) => next(err));
});

//GET /api/steps/:id
router.get("/:id", checkByID(), (req, res, next) => {
  res.status(200).json(req.step);
});

//POST /api/steps
router.post("/", stepsValidation(), (req, res, next) => {
  const changes = req.body;
  Steps.postStep(changes)
    .then((step) => {
      step
        ? res.status(201).json(step)
        : res.status(404).json({ message: `can't post, error` });
    })
    .catch((err) => next(err));
});

//UPDATE /api/steps/:id
router.put("/:id", checkByID(), stepsValidation(), (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;
  Steps.updateStep(id, changes)
    .then((step) => {
      res.status(200).json(step);
    })
    .catch((err) => next(err));
});

//DELETE /api/steps/:id
router.delete("/:id", checkByID(), (req, res, next) => {
  const { id } = req.params;
  Steps.deleteStep(id)
    .then((step) => {
      res.status(204).json(step);
    })
    .catch((err) => next(err));
});

module.exports = router;

// 200 = Okay - put on successful GET/PUT requests
// 200 (if you want send some additional data in the Response) or 204 (recommended).
// 201 = Object Created, put on successful POST requests
// 204 = Object Deleted, put on successful DELETE requests

// 400 = BAD REQUEST - Object missing important information, POST/PUT
// 401 = UNAUTHORIZED - Failure to Login
// 402 = Payment Required
// 403 = FORBIDDEN - did not login, tried to access anyway
// 404 = NOT FOUND - POST/PUT/DELETE object does not exist

// 418 = I AM A TEAPOT - Do not use - but funny!

// 500 = Internal Server Error - Your fault

// RESTRICT => don't let it be deleted
// CASCADE => update all things it was in
// SET NULL => set references as null
// DO NOTHING/NO ACTION => Do nothing
