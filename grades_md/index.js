var gradesJson = require('../data/studGrades.json');

var tmp = gradesJson.students;

//returns all students data
exports.getAllStudentsData = function() {
	return gradesJson;
}

//returns student grade by id
exports.getStudGradeById = function(id) {
	for(var i=0; tmp.length; i++) {
		if(tmp[i].id == id)
			return tmp[i];
	}
}

//returns students grades by age
exports.getStudsGradeByAge = function(age)
{
    var str = "[";
    for(var i = 0; i<tmp.length; i++)
    {
        if(tmp[i].age == age)
        {
            str += (JSON.stringify(tmp[i]));
            str += ","; 
        }
    }
    str = str.slice(0, -1);
    str += "]";
    var ageJson = JSON.parse(str);
    return ageJson;
} 

/*

exports.getStudsGradeByAge = function(age) {
	//var tmp = gradesJson.students;
	var str = "[";
	for(var i=0; gradesJson.students.length; i++) {
		if(gradesJson.students[i].age == age) {
			str+=(JSON.stringify(gradesJson.students[i]));
			str+=",";
		}
	}
	str = str.slice(0, -1);
    str+="]";
    var ageJson = JSON.parse(str.toString());
    return ageJson;
}
*/



/*
exports.getStudsGradeByAge = function(age)
{
    var str = "[";
    for(var i = 0; i<gradesJson.students.length; i++)
    {
        if(gradesJson.students[i].age == age)
        {
            str += (JSON.stringify(gradesJson.students[i]));
            str += ","; 
        }
    }
    str = str.slice(0, -1);
    str += "]";
    var ageJson = JSON.parse(str.toString());
    return ageJson;
} 
 
/*
exports.getStudsGradeByAge = function(age)
{
    var str = "[";
    for(var i = 0; i<gradesJson.students.length; i++)
    {
        if(gradesJson.students[i].age == age)
        {
            str += (JSON.stringify(gradesJson.students[i]));
            str += ","; 
        }
    }
    str = str.substring(0, str.length-1);
    str += "]";
    studJson = JSON.parse(str.toString());
    return studJson;
} 
*/ 