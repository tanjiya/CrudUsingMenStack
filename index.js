const connection = require('./model');
const express = require('express');
const app = express();
const expressHandlerBars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const CourseController = require('./controllers/CoursesController');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', expressHandlerBars({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {});
});

app.use('/course', CourseController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});