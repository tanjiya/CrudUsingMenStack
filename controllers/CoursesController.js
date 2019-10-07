const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const CourseModel = mongoose.model('CourseModel');

router.get('/list', (req, res) => {
    CourseModel.find((err, docs) => {
        if(!err)
        {
            res.render('list', { data: docs });
            // console.log(docs);
            // res.send('Course Controller');
        }
    });
});

router.get('/add', (req, res) => {
    res.render('add-course');
});

router.post('/add', (req, res) => {
    // console.log(req.body);
    var course = new CourseModel({
        courseName: req.body.courseName,
        courseId: Math.ceil(Math.random() + 100000000),
        courseDuration: req.body.courseDuration,
        courseFee: req.body.courseFee
    });
    
    course.save((err, data) => {
        if(err)
        {
            console.log(err);
            res.redirect('/course/list');
        } else {
            console.log('Record has created successfully!');
            res.redirect('/course/list');
        }
    });
});

module.exports = router;