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

router.get('/:id', validateId, (req, res) => {
 res.status(200).json(req.project);
});

router.post('/', validateBody, (req, res) => {
 projectsDb
  .insert(req.body)
  .then(project => {
   res.status(201).json(project);
  })
  .catch(err => {
   res.status(500).json(err);
  });
});

module.exports = router;
