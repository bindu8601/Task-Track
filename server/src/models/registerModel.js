const db = require('../config/db');  // Importing the database connection

const registerUser = (userData, callback) => {
    // Log the user data for debugging (Don't log passwords in production)
    console.log('Registering user:', { userData });

    // SQL query to insert a new user
    const sqlQuery = `
        INSERT INTO USERS (FIRSTNAME, LASTNAME, USEREMAIL, USERPASSWORD, USERNAME)
        VALUES (?, ?, ?, ?, ?)
    `;

    // Destructure userData to extract necessary fields
    const { firstName, lastName, userEmail, password, userName } = userData;

    // Run the query
    db.query(sqlQuery, [firstName, lastName, userEmail, password, userName], (err, result) => {
        if (err) {
            console.error('Error during the query:', err);  // Log the error
            return callback(err, null);  // Pass the error to the callback
        }

        console.log('Query result:', result);  // Log the result to ensure the query is executed
        return callback(null, result);  // Pass the result to the callback
    });
};

module.exports = {
    registerUser
};
