const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = 4000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Import routes
const infoRoutes = require('./routes/infoRoutes');
const ageRoutes = require('./routes/ageRoutes');
const todoRoutes = require('./routes/todoRoutes');

// Use routes
app.use('/info', infoRoutes);
app.use('/age', ageRoutes);
app.use('/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});