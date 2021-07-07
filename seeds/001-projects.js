exports.seed = function (knex) {
  const projects = [
    {
      name: "Project Bald Eagle",
      description: "Steal the declaration of independence",
      completed: false,
    },
    {
      name: "Project Golden Goose",
      description: "Make monies",
      completed: false,
    },
    {
      name: "Clean my house",
      description: "Clean home",
      completed: true,
    },
  ];
  return knex("projects").insert(projects);
};
