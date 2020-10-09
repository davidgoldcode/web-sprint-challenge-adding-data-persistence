const db = require("../data/db-config");

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks,
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
  return db("tasks");
}
