const Steps = require("../steps/steps-helper");

module.exports = {
  checkByID,
  stepsValidation,
};

//GET /api/steps/:id
function checkByID() {
  return (req, res, next) => {
    const { id } = req.params;
    Steps.getbyID(id)
      .then((step) => {
        if (step) {
          req.step = step;
          next();
        } else {
          res.status(404).json({ message: `no user of ${id} found` });
        }
      })
      .catch((err) => next(err));
  };
}

//POST - UPDATE /api/steps/:id and /api/steps
function stepsValidation() {
  return (req, res, next) => {
    const { step_number, instructions, scheme_id } = req.body;
    if (!step_number || !instructions || !scheme_id) {
      return res.status(400).json({ message: "please check your properties" });
    }
    next();
  };
}
