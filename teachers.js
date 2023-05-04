let addFormObj2=null;
addTeacherForm=()=>{
	return(`
<div id="AddForm">
   <h1 class="mt-3 px-5">Add New Teachers</h1>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Teacher ID</label>
      <input type="text" id="teacherID" class="form-control" aria-describedby="emailHelp">
     
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Teacher Name</label>
      <input type="text" class="form-control" id="teacherName">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Teacher Salary</label>
      <input type="text" class="form-control" id="teacherSalary">
    </div>
 
      <button onClick="addTeacher();" class="btn btn-primary">Add Teacher</button>
</div>
`);
}
let updateTeacherForm=(index)=>{
   	return(`
<div id="UpdateForm">
   <h1 class="mt-3 px-5">Update A Teacher</h1>
     <input type='hidden' id='recordID' value='${index}'/>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Teacher ID</label>
      <input type="text" value='${teachers[index][0]}' id="teacherID" class="form-control"  aria-describedby="emailHelp">
     
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Teacher Name</label>
      <input type="text" class="form-control" value='${teachers[index][1]}'  id="teacherName">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Teacher Salary</label>
      <input type="text" class="form-control" value='${teachers[index][2]}' id="teacherSalary">
    </div>
 
      <button onClick="addTeacher();" class="btn btn-primary">Update Teacher</button>

</div>
`);
}
let addTeacher=()=>{
	teachers.push([teacherID.value,teacherName.value,teacherSalary.value]);
	col_right.innerHTML=listteacher();
}
listteacher=()=>{
	let str=
	`<div class="container py-5">
		<div class="row">
			<div class="col-sm-12">
				<div class="row py-1.5">
					<div class="col-sm-2 fw-bold">
						Teacher ID
					</div>
					<div class="col-sm-2 fw-bold">
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
			</div>
	`
	for(i=0;i<teachers.length;i++)
	{
		str=str+`<div class="row py-2">
					<div class="col-sm-2">
					 <div class="font-weight-bold">
						${teachers[i][0]}
					 </div>
					</div>
					<div class="col-sm-2 ">
						${teachers[i][1]}
					</div>
					<div class="col-sm-2">
						${teachers[i][2]}
					</div>
					<div class="col-sm-2 ">
					  <button class="btn btn-primary" onClick="editTeacher(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
					  <button class="btn btn-primary" onClick="deleteTeacher(${i})">Delete</button>
					</div>
				</div>
			
	</div>`;
	}
	str=str+"</div></div>"
	return(str);
}
let editTeacher=(index)=>{
	 addFormObj2=AddForm;
   col_left.innerHTML=updateTeacherForm(index);
   recordID.value=index;
}
let updateTeacher=()=>{
  let id=teacherID.value();
	let name=teacherName.value();
	let salary=teacherSalary.value();
	teacher[recordID.value][0]=id;
	teacher[recordID.value][1]=name;
	teacher[recordID.value][2]=salary;
	col_left.innerHTML=addTeacherForm();
	col_right.innerHTML=listteacher();
	UpdateForm.style.display='none';
}
let deleteTeacher=(index)=>{
	teachers.splice(index,1);
	col_right.innerHTML=listteacher();
}