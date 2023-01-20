const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
mongoose.connect('mongodb://localhost/my-project', { useNewUrlParser: true });

// Import routes
const submitRouter = require('./routes/submit');
const logsRouter = require('./routes/logs');

// Use routes
app.use('/api/submit', submitRouter);
app.use('/api/logs', logsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});