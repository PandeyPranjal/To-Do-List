let listContainer = document.getElementById("list-container");
let head = document.querySelector('head')
let inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value == ""){
    alert("Add Your Task");
  } 
  else{
    const task = document.createElement("li")
    task.textContent = inputBox.value;
    listContainer.appendChild(task)
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    task.appendChild(span)
    span.style.right = '0';
  }
  inputBox.value = ""
  saveData()
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName == 'LI'){
      e.target.classList.toggle('checked')
    saveData()
    }
    else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove()
      saveData()
    }
})

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
  listContainer.innerHTML=localStorage.getItem('data')
}

showData()