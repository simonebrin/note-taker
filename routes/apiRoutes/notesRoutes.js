const router = require('express').Router();
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper
} = require('../../lib/zookeepers');
const { zookeepers } = require('../../data/zookeepers');

router.get('/zookeepers', (req, res) => {
  let results = zookeepers;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/zookeepers/:id', (req, res) => {
  
});

router.post('/zookeepers', (req, res) => {

});

module.exports = router;
