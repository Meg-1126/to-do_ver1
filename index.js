
//Event when user click add button
document.querySelector("#submit").onclick = function(){
  if(document.querySelector(".form-control").value.length === 0)
  {
    //DISPLAY ALERT IF YOU SUBMIT TASK WITHOUT TYPING ANYTHING
     alert("You must type something!");
  } else 
  {
    document.querySelector(".list-group").innerHTML +=
    `<li class="list-group-item">
    <span id="taskname">
      ${document.querySelector(".form-control").value}
    </span>
    <input type="text" class="input-edit">
    <div class="icon-wrapper">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-trash-can"></i>
    </div>
    </li>`;
   } 

   // DELETE LISTS
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

  // DELETE TASKS
    let trashAll = document.querySelectorAll(".fa-trash-can");
    for (let i = 0; i < trashAll.length; i++) 
    {
    trashAll[i].addEventListener("click", function() 
     {
      let list = this.parentNode;
      list.remove();
     });
    }

  //EDIT LISTS
  let editAll = document.querySelectorAll(".fa-pen-to-square");
  for (let j = 0; j < editAll.length; j++) 
    {
    editAll[j].addEventListener("click", function() 
     {
      let text = document.querySelector("#taskname"[j]);
      // console.log(text);
     });
    }








                               