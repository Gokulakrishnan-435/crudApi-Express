/* @HTTP GET REQUEST
   @ACCESS public
   @URL/api/students
*/
const StudentSchema = require("../models/Student");
exports.getAllStudents = async (req, res) => {
  let payload = await StudentSchema.find();
  res.status(200).json({ message: "fetched data", payload });
};

exports.getStudent = async (req, res) => {
  let payload = await StudentSchema.find({ _id: req.params.id });
  res.status(200).json({ message: "fetched student", payload });
};

exports.creatStudent = async (req, res) => {
  let { name, std_id, email, courses } = req.body;
  let payload = {
    name,
    std_id,
    email,
    courses,
  };
  let data = await StudentSchema.create(payload);
  res.status(201).json({ message: "successfully student created", data });
};

exports.updateStudent = async (req, res) => {
  let { name, std_id, email, courses } = req.body;
  let payload = await StudentSchema.findByIdAndUpdate(
    req.params.id,
    {
      name,
      std_id,
      email,
      courses,
    },
    {
      new: true,
    }
  );
  await payload.save();
  res.status(201).json({ message: "successfully student updated", payload });
};
exports.deleteStudent = async (req, res) => {
  let payload = await StudentSchema.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "successfully deleted", payload });
};
