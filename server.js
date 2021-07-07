const express = require("express");
const helmet = require("helmet");
const db = require("./api/api-model");

const server = express();
server.use(helmet());
server.use(express.json());

// adding resources.
server.post("/api/resources", (req, res) => {
  db.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "error adding " });
    });
});

// retrieving a list of resources.
server.get("/api/resources", (req, res) => {
  db.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Couldn't retrieve resources right now" });
    });
});

// adding projects.
server.post("/api/projects", (req, res) => {
  db.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "error adding project" });
    });
});

// retrieving a list of projects.
server.get("/api/projects", (req, res) => {
  db.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Couldn't retrieve projects right now" });
    });
});

// adding tasks.
server.post("/api/tasks", (req, res) => {
  db.addTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      res.status(500).json({ message: "Couldn't add task at this time" });
    });
});

// retrieving a list of tasks. The list of tasks should include the project name and project description.
server.get("/api/tasks", (req, res) => {
  db.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Couldn't retrieve tasks right now" });
    });
});

server.get("/api/projectresources", (req, res) => {
  db.getProjectResources()
    .then((projectresources) => {
      res.status(200).json(projectresources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Couldn't retrieve projects right now" });
    });
});

server.get("/api/tasks", (req, res) => {
  db.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Couldn't retrieve tasks right now" });
    });
});

server.get("/api/projectResources/:id", (req, res) => {
  const resourceId = req.params.id;
  db.getProjectByResource(resourceId)
    .then((pResource) => {
      res.status(200).json(pResource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Couldn't retrieve that right now" });
    });
});

module.exports = server;
