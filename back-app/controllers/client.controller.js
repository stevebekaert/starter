const Client = require("../models/client.model.js");


// Save a new client
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a client
  const client = new Client({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  });


  // Save Client in the database
  Client.create(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client."
      });
    else res.send(data);
  });
};

// Retrieve all clients
exports.findAll = (req, res) => {
  Client.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    else res.send(data);
  });
};


// Find a single Client with a clientId:
exports.findOne = (req, res) => {
  Client.findById(req.params.clientId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Client with id ${req.params.clientId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Client with id " + req.params.clientId
        });
      }
    } else res.send(data);
  });
};


// Update a Client identified by the clientId in the request
exports.update = (req, res) => {
  console.log("id : ", req.params.clientId);

  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Client.updateById(
    req.params.clientId,
    new Client(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Client with id ${req.params.clientId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Client with id " + req.params.clientId
          });
        }
      } else res.send(data);
    }
  );
};


// Delete a Client with the specified clientId in the request:
exports.delete = (req, res) => {
  Client.remove(req.params.clientId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Client with id ${req.params.clientId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete client with id " + req.params.clientId
        });
      }
    } else res.send({ message: `Client was deleted successfully!` });
  });
};


// Delete all Customers from the database:
exports.deleteAll = (req, res) => {
  Client.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all clients."
      });
    else res.send({ message: `All clients were deleted successfully!` });
  });
};
