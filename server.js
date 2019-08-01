const express = require('express');
const projectsRouter = require('./projects/projectRouter.js');
const actionsRouter = require('./actions/actionRouter');
const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
 res.send('<h1>Hello Home Page!</h1>');
});

module.exports = server;
