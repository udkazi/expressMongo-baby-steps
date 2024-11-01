require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
connectDB();

//seprate api url from app.js 
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const newUsersRoutes = require('./routes/newuserRoutes');

app.use('/', userRoutes);
app.use('/',postRoutes);
app.use('/',newUsersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
