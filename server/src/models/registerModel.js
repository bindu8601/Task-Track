const db = require('../config/db')

const registerUser = (userData, callback) => {
  const sqlQuery = `
        INSERT INTO USERS (FIRSTNAME, LASTNAME, USEREMAIL, USERPASSWORD, USERNAME)
        VALUES (?, ?, ?, ?, ?)
    `

  const { firstName, lastName, userEmail, password, userName } = userData

  db.query(
    sqlQuery,
    [firstName, lastName, userEmail, password, userName],
    (err, result) => {
      if (err) {
        console.error('Error during the query:', err)
        return callback(err, null)
      }

      console.log('Query result:', result)
      return callback(null, result)
    }
  )
}

module.exports = {
  registerUser,
}
