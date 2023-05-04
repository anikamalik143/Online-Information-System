let listCoursesReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Course ID
				</div>
				<div class="col-sm-4 fw-bold">
					Course Name
				</div>
				<div class="col-sm-2 fw-bold">
					Course Fee
				</div>
				<div class="col-sm-2 fw-bold">
					Edit
				</div>
				<div class="col-sm-2 fw-bold">
					Delete
				</div>
			</div>
		
	`;
	if(id!=""){
		let searchID1=parseInt(id);
       for(i=0;i<courses.length;i++)
    {
    	if(courses[i][0]==searchID1)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${courses[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${courses[i][1]}
					</div>
					<div class="col-sm-2">
						${courses[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCourse(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCourse(${i})">Delete</button>
				
					</div>
					
				</div>`;
	        }
}
else{

for(i=0;i<courses.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${courses[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${courses[i][1]}
					</div>
					<div class="col-sm-2">
						${courses[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCourse(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCourse(${i})">Delete</button>
				
					</div>
					
				</div>`;
}
str=str+"</div></div>"
}
return(str);
}
let listStudentsReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Student ID
				</div>
				<div class="col-sm-4 fw-bold">
					Student Name
				</div>
				<div class="col-sm-2 fw-bold">
					Student Fee
				</div>
				<div class="col-sm-2 fw-bold">
					Edit
				</div>
				<div class="col-sm-2 fw-bold">
					Delete
				</div>
			</div>
		
	`;
	if(id!=""){
		let searchID2=parseInt(id);
       for(i=0;i<students.length;i++)
    {
    	if(students[i][1]==searchID2)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${students[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${students[i][1]}
					</div>
					<div class="col-sm-2">
						${students[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCourse(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCourse(${i})">Delete</button>
				
					</div>
					
				</div>`;
	        }
}
else{

for(i=0;i<students.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${students[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${students[i][1]}
					</div>
					<div class="col-sm-2">
						${students[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCourse(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCourse(${i})">Delete</button>
				
					</div>
					
				</div>`;
}
str=str+"</div></div>"
}
return(str);
}

let listTeachersReport=()=>{
	let str=
`<div class="container py-5">
<div class="row">
		<div class="col-sm-12">
			<div class="row py-1.5">
				<div class="col-sm-2 fw-bold">
					Teacher ID
				</div>
				<div class="col-sm-4 fw-bold">
					Teacher Name
				</div>
				<div class="col-sm-2 fw-bold">
					Teacher Salary
				</div>
				<div class="col-sm-2 fw-bold">
					Edit
				</div>
				<div class="col-sm-2 fw-bold">
					Delete
				</div>
			</div>
		
	`;
	if(id!=""){
		let searchID3=parseInt(id);
       for(i=0;i<teachers.length;i++)
    {
    	if(teachers[i][2]==searchID3)
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${teacher[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${teacher[i][1]}
					</div>
					<div class="col-sm-2">
						${teacher[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCourse(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCourse(${i})">Delete</button>
				
					</div>
					
				</div>`;
	        }
}
else{

for(i=0;i<teachers.length;i++)
{
	str=str+`<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						${teacher[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${teacher[i][1]}
					</div>
					<div class="col-sm-2">
						${teacher[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="editCourse(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onClick="deleteCourse(${i})">Delete</button>
				
					</div>
					
				</div>`;
}
str=str+"</div></div>"
}
return(str);
}
let Reports=(id)=>{
     if(id==1){
     	return listCoursesReport();
     }
     else if(id==2){
     	return listStudentsReport();
     }
     else if(id==3){
     	return listTeachersReport();
     }
}