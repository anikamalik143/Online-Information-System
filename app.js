option=parseInt(option);
if(option==1){
	content.innerHTML=home();
}
else if(option==2){
	content.innerHTML=about();
}
else if(option==3){
	col_left.innerHTML=addCourseForm();
	col_right.innerHTML=listCourses();
}
else if(option==4){
	col_left.innerHTML=addTeacherForm();
	col_right.innerHTML=listteacher();
}
else if(option==5){
	col_left.innerHTML=addStudentForm();
	col_right.innerHTML=listStudent();
}
 if(option==6){
	content.innerHTML=Reports(1);
}
else if(option==7){
	content.innerHTML=Reports(2);
}
else if (option==8){
	content.innerHTML=Reports(3);
}
