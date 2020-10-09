const db = require("../data/db-config");
const { resource } = require("../server");

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks,
  getProjectResources,
  getTasks,
  getProjectByResource,
};

function addResource(info) {
  return db("resources").insert(info);
}

function getResources() {
  return db("resources");
}

function addProject(info) {
  return db("projects").insert(info);
}

function getProjects() {
  return db("projects");
}

function addTask(info) {
  return db("tasks").insert(info);
}

function getTasks() {
  return db("tasks")
    .join("projects", "projects.id", "=", "tasks.id")
    .select(
      "tasks.*",
      "projects.name AS Project Name",
      "projects.description AS Project Description"
    );
}

function getProjectResources() {
  return db("project_resources").join(
    "resources",
    "resources.id",
    "=",
    "project_resources.project_id"
  );
}

function getTasks() {
  return db("tasks");
}

function getProjectByResource(id) {
  return db("project_resources")
    .where({ resource_id: id })
    .join("resources", "resources.id", "=", "project_resources.project_id");
}

// retrieving a list of tasks. The list of tasks should include the project name and project description.
