const registerModel = require('../models/registerModel')

const registerController = (req, res) => {
  const { firstName, lastName, userEmail, password, userName } = req.body
  if (!userName || !userEmail) {
    return res.status(400).json({ message: 'All Fields are required' })
  }
  registerModel.registerUser(
    { firstName, lastName, userEmail, password, userName },
    (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists!' })
        }
        return res
          .status(500)
          .json({ message: 'Database error', error: err.message })
      }
      res
        .status(200)
        .json({ success: true, message: 'User Registered Successfully!' })
    }
  )
}

module.exports = {
  registerController,
}
