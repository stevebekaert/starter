const Laws = require('../models/laws.model.js');

exports.findAll = (req, res) => {
    const Law = new Laws({...req.body});
    Law.getAll((err, data) => {
        if (err) {
            res.status(500).send("Error occured")
        } else {
            res.send(data)
        }
    })
};

exports.create = (req, res) => {
  if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
  }
  const Law = new Laws({...req.body});
  Law.create(Law, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client."
      });
    else res.send(data);
  });
};

exports.makeVisible = (req, res) => {
  let reqBody = { ...req.body, draft: !req.body.draft}; //Spread object with a draft property already existing, the opposite of what is sent. 
  const Law = new Laws({...reqBody})
  Law.updateVisibility(req.params.id, Law, (err, data) => { 
    if(err) {
      res.status(500).send({ message : err.message || 'Update of the visibility of item impossible.'})
    } else {
      res.send({...data, updatedLaw : Law})
    }
  })
};


