exports.seed = function (knex) {
  return knex("steps").insert([
    {
      scheme_id: 1,
      step_number: 1,
      instructions: "solve prime number theory",
    },
    { scheme_id: 1, step_number: 2, instructions: "crack cyber security" },
    {
      scheme_id: 2,
      step_number: 1,
      instructions: "blackmail world leaders",
    },
    {
      scheme_id: 3,
      step_number: 1,
      instructions: "collect all the sheep in Scotland",
    },
    { scheme_id: 4, step_number: 1, instructions: "profit" },
    {
      scheme_id: 5,
      step_number: 1,
      instructions: "find Japanese investors",
    },
  ]);
};
