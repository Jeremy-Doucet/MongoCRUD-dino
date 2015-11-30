"use strict";
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Dino = mongoose.model('Dino');

// POST /api/v1/dino
router.post('/dino', (req, res) => {
  let new_dino = new Dino(req.body);
  new_dino.save((err, result) => {
    if(err) return res.status(500).send("Error in the database.");
    if(!result) return res.status(400).send("Could not save the dino. Check yo fields.");
    res.send(result);
  });
});

module.exports = router;
