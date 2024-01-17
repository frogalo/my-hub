const express = require('express');
const {query} = require('../db');

const router = express.Router();

// Function to check if the 'users' table exists
async function checkUsersTable() {
    const checkTableQuery = `
        SELECT COUNT(*)
        FROM information_schema.tables
        WHERE table_name = 'users';
    `;

    const [result] = await query(checkTableQuery);

    // Check if the length of the result array is greater than zero
    // This means that the 'users' table exists
    return result['COUNT(*)'] !== 1;
}

// Function to create the 'users' table
async function createUsersTable() {
    const createTableQuery = `
        CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;

    await query(createTableQuery);
}

router.post('/register', async (req, res) => {
    try {
        const {username, password} = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({error: 'Username and password are required.'});
        }

        // Check if the 'users' table exists, create it if it doesn't
        const tableExists = await checkUsersTable();
        if (!tableExists) {
            await createUsersTable();
        }

        // Check if the username already exists
        const existingUser = await query('SELECT * FROM users WHERE username = ?', [username]);

        if (existingUser.length > 0) {
            // User already exists, return 409 Conflict status
            return res.status(409).json({error: 'Username already exists.'});
        }

        // Insert the new user into the 'users' table
        const result = await query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);

        // Respond with success and the user ID
        return res.status(200).json({
            success: true,
            user: {
                id: result.insertId,
                username: username,
                // password: password,
            }
        });
    } catch (error) {
        console.error('Error registering user:', error);
        // Return 500 Internal Server Error status
        return res.status(500).json({error: 'Internal server error.'});
    }
});


module.exports = router;
