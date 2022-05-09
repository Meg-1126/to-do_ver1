// VARIABLES
// const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];

//DISPLAY ALERT IF YOU SUBMIT TASK WITHOUT TYPING ANYTHING
document.querySelector("#submit").onclick = function(){
  if(document.querySelector(".form-control").value.length == 0)
  {
     alert("You must type something!");
  } else 
  {
    document.querySelector(".list-group").innerHTML +=
    `<li class="list-group-item">
    <span id="taskname">
      ${document.querySelector(".form-control").value}
    </span>
    <input type="text" class="input-edit">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-trash-can"></i>
    </li>`;
  }

  // DELETE TASKS
  // let trash = document.querySelector(".fa-trash-can");
let trashAll = document.querySelectorAll(".fa-trash-can");
for (let i = 0; i < trashAll.length; i++) 
{
trashAll[i].addEventListener("click", function() 
 {
  let list = this.parentNode;
  list.remove();
 });
}
}








                               