module.exports = router => {
  const clients = require("../controllers/client.controller.js");

  // Create a new client
  router.post("/clients", clients.create);

  // Retrieve all clients
  router.get("/clients", clients.findAll);

  // Retrieve a single client with customerId
  router.get("/clients/:clientId", clients.findOne);

  // Update a client with clientId
  router.put("/clients/:clientId", clients.update);

  // Delete a client with clientId
  router.delete("/clients/:clientId", clients.delete);

  // Create a new client
  router.delete("/clients", clients.deleteAll);
};
