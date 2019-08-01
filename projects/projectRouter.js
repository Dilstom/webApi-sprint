const express = require('express');
const projectsDb = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
 projectsDb
  .get()
  .then(projects => {
   res.status(200).json(projects);
  })
  .catch(err => {
   res.status(500).json(err);
  });
});

module.exports = router;
