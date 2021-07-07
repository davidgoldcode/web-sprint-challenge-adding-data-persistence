exports.seed = function (knex) {
  const project_resources = [
    {
      project_id: 1,
      resource_id: 1,
    },
    {
      project_id: 2,
      resource_id: 2,
    },
    {
      project_id: 3,
      resource_id: 3,
    },
  ];
  return knex("project_resources").insert(project_resources);
};
