const Student = require('../model/student')

// creat Student record
exports.create = async (req, res) => {
  try {
    const student = {
      name: req.body.name,
      physics: req.body.physics,
      maths: req.body.maths,
      english: req.body.english,
    }

    const stu = await Student.create(student)
    res.status(200).json({ data: stu })
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while creating a Student.',
    })
  }
}
// Retrieve all Students from the database.
exports.findAll = async (req, res) => {
  try {
    const stu = await Student.findAll()
    res.status(200).json({ data: stu })
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while getting all the Student.',
    })
  }
}
// Find a single Student with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id
    const stu = await Student.findByPk(id)
    res
      .status(200)
      .json(
        clnt == 0 || clnt == null
          ? { message: `Student not found` }
          : { data: stu },
      )
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while geting the Student.',
    })
  }
}
// Update a Student by the id in the request
exports.update = async (req, res) => {
  try {
    const _id = req.params.id
    const stu = await Student.update(req.body, { where: { id: _id } })
    res
      .status(200)
      .json(
        stu == 0
          ? { message: `Student not found` }
          : { message: `Student was updated succesfully` },
      )
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while updating the Student.',
    })
  }
}
// Delete a Student with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.params.id
    const stu = await Student.destroy({
      where: { id: id },
    })
    res.json(
      stu == 0
        ? { message: `Student not found` }
        : { message: 'Student was deleted successfully!' },
    )
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while creating the Student.',
    })
  }
}