const db = require('../config/db')

const addTask = (data, callback) => {
  const sqlQuery =
    'INSERT INTO tasks (ID, TASKTITLE, TASKDESCRIPTION, PRIORITY, CREATEDON, TASKSTATUS,TASKDATE) VALUES (?, ?, ?,?,?,?)'
  const { id, taskTitle, taskDescription, priority, createdOn, taskStatus,taskDate } =
    data
  db.query(
    sqlQuery,
    [id, taskTitle, taskDescription, priority, createdOn, taskStatus,taskDate],
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

module.exports = { addTask }
