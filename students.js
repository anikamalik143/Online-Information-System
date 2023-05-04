let addFormObj1=null;
addStudentForm=()=>{
	return(`
<div id="AddForm">
  <h1 class="mt-3 px-5">Add New Students</h1>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Student ID</label>
       <input type="text" id="studentID" class="form-control" aria-describedby="emailHelp">
     </div>
     <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Student Name</label>
      <input type="text" class="form-control" id="studentName">
     </div>
     <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Student Fee</label>
      <input type="text" class="form-control" id="studentFee">
     </div>
     <button onClick="addStudent();" class="btn btn-primary">Add Student</button>
</div>
  `);
}
let updateStudentForm=(index)=>{
  return(`
<div id="UpdateForm">
  <h1 class="mt-3 px-5">Update A Students</h1>
     <input type='hidden'id='recordID' value='${index}'/>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Student ID</label>
       <input type="text" value='${students[index][0]}'id="studentID" class="form-control" aria-describedby="emailHelp">
     </div>
     <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Student Name</label>
      <input type="text" class="form-control"value='${students[index][1]}' id="studentName">
     </div>
     <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Student Fee</label>
      <input type="text" class="form-control" value='${students[index][2]}'id="studentFee">
     </div>
     <button onClick="addStudent();" class="btn btn-primary">Update Student</button>
</div>
  `);
}
let addStudent=()=>{
  students.push([studentID.value,studentName.value,studentFee.value]);
  col_right.innerHTML=listStudent();
}
listStudent=()=>{
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
      </div> `

for(i=0;i<students.length;i++)
{
  str=str+`<div class="row py-2">
          <div class="col-sm-2">
            ${students[i][0]}
          </div>
          <div class="col-sm-4">
            ${students[i][1]}
          </div>
          <div class="col-sm-2">
            ${students[i][2]}
          </div>
          <div class="col-sm-2">
            <button class="btn btn-primary" onClick="editStudent(${i})">Edit</button>
          </div>
          <div class="col-sm-2">
             <button class="btn btn-primary" onClick="deleteStudent(${i})">Delete</button>
          </div>
        </div>`;
}
str=str+"</div></div>"
return(str);
}
let editStudent=(index)=>{
    addFormObj1=AddForm;
    col_left.innerHTML=updateStudentForm(index);
    recordID.value=index;

}
let updateStudent=()=>{
    let id=studentID.value();
    let name=studentName.value();
    let fee=studentFee.value();
    students[recordID.value][0]=id;
    students[recordID.value][1]=name;
    students[recordID.value][2]=fee;
    col_left.innerHTML=addStudentForm();
    col_right.innerHTML=listStudent();
    UpdateForm.style.display='none';
}
let deleteStudent=(index)=>{
  students.splice(index,1);
  col_right.innerHTML=listStudent();
}