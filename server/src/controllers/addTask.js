const addTaskModel = require('../models/addTaskModel')

const addTaskController = (req, res) => {
  const [id, taskTitle, taskDescription, priority, createdOn, taskStatus,taskDate] =
    req.body
  if (!id) {
    return res.status(400).json({ message: 'Id is needed' })
  }
  if (!taskTitle || !taskDescription) {
    return res.status(400).json({ message: 'Need All details' })
  }
  addTaskModel.addTask(
    { id, taskTitle, taskDescription, priority, createdOn, taskStatus,taskDate },
    (err, result) => {
      if (err) {
        return res.status(400).json({ success: false, message: 'Api failed' })
      } else {
        return res.status(400).json({ success: true, message: 'Task Added' })
      }
    }
  )
}

module.exports = {
  addTaskController,
}
