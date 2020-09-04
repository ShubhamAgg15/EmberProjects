'use strict';

module.exports = function(app) {
  const express = require('express');
  let postsRouter = express.Router();

  // findAll
  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [
        { id:1, title:'first post', body:'blogging'},
        { id:2, title:'second post', body:'blogging again'}
      ]
    });
  });

  //create record
  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  //findRecord
  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  //update
  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  //destroy record
  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/posts', require('body-parser').json());
  app.use('/api/posts', postsRouter);
};
