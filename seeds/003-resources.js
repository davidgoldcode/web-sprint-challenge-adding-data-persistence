exports.seed = function (knex) {
  const resources = [
    {
      name: "Car",
      description: "A car",
    },
    {
      name: "Nick Cage",
      description: "An actor",
    },
    {
      name: "Jet",
      description: "Like a plane",
    },
  ];
  return knex("resources").insert(resources);
};
