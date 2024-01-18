const express = require('express');
const {query, asyncFunction} = require('./db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);


async function testDatabaseConnection() {
    try {
        const result = await query('SELECT 1');
        console.log('Database connection established');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

testDatabaseConnection()
    .then(() => {
        // Start the server after the database connection is established
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    });
