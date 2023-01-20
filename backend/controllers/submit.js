const Log = require('../models/log');

exports.submit = (req, res) => {
  const { message, category } = req.body;
  const log = new Log({ message, category });

  log.save((err, log) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Message submitted successfully' });
  });
};
