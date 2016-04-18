var express = require('express');
var bodyParser = require('body-parser');
var gradesMd = require('./grades_md');
var app = express();


var port = process.env.PORT || 3000;

//app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//app.all('*', function(req,res,next){
    //console.log('logged in!');
   // req.next();
//});

app.get('/studsData', function(req,res) {
   var studsData =  gradesMd.getAllStudentsData();
   res.json(studsData);
});

app.get('/gradeById/:id', function(req,res) {
   var studGrade =  gradesMd.getStudGradeById(req.params.id);
   res.json(studGrade);
});

app.get('/gradeByAge/:age', function(req,res) {
   var studsGrades =  gradesMd.getStudsGradeByAge(req.params.age);
   res.json(studsGrades);
});


app.listen(port);
console.log('listening on port ' + port);


