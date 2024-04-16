import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    teacherName: String,
    subject: String,
    education: String,
    image: String,
});


const Teacher = mongoose.models.teacher || mongoose.model("teacher", teacherSchema);

export default Teacher;