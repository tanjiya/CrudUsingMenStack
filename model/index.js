const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/crud', (err) => {
    if(!err)
    {
        console.log('MongoDB has connected successfully!');
    } else {
        console.log('The error: ' + err);
    }
});

const CourseModel = require('./CourseModel');