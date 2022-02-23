const { Router } = require("express");
const {
  getAllStudents,
  creatStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");
const router = Router();
router.route("").get(getAllStudents).post(creatStudent);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
