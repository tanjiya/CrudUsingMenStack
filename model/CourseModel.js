const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: "Course name is required!"
    },
    courseId: {
        type: String
    },
    courseDuration: {
        type: String,
        required: "Course duration is required"
    },
    courseFee: {
        type: String,
        required: "Course Fee is required"
    }
});

mongoose.model('CourseModel', courseSchema);