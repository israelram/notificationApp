const Log = require('../models/log');

exports.getLogs = (req, res) => {
  Log.find({}, (err, logs) => {
    if (err) return res.status(500).send(err)});
  };