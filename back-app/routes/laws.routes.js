
module.exports = router => {
    const laws = require('../controllers/laws.controller.js');

    router.get('/laws', laws.findAll);

    router.post("/laws", laws.create);

    router.put("/laws/:id", laws.makeVisible);
}
