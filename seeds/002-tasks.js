exports.seed = function (knex) {
  const tasks = [
    {
      description: "Break into white house",
      completed: false,
      project_id: 1,
    },
    {
      description: "Print cash",
      completed: false,
      project_id: 2,
    },
    {
      description: "Hire maid",
      completed: true,
      project_id: 3,
    },
  ];
  return knex("tasks").insert(tasks);
};
