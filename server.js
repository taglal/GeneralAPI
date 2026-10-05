require('dotenv').config();
const express = require('express');
const cors = require('cors');

const tableRoutes = require('./modules/table_ops');
const emailRoutes = require('./modules/eamil_ops');
const fileRoutes = require('./modules/file_ops');
const authRoutes = require('./modules/auth_ops');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/', tableRoutes);
app.use('/email', emailRoutes);
app.use('/file', fileRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port <a href="http://localhost:${process.env.APP_PORT}">${process.env.APP_PORT}</a>`);
});
