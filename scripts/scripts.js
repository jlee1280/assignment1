const themebtn = document.querySelector(".dark-theme");
const sideTheme = document.querySelector("body, h1");
const textTheme = document.querySelector(".fourth-container");
const noteBtn = document.querySelector(".new-note");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

function changeTheme()
{
  if (themebtn.textContent === "Dark Theme")
  {
    themebtn.textContent = "Light Theme";
 themebtn.classList.toggle("dark-mode");
 sideTheme.classList.toggle("dark-mode");
 textTheme.classList.toggle("dark-mode");
 noteBtn.classList.toggle("dark-mode");
 saveBtn.classList.toggle("dark-mode");
 cancelBtn.classList.toggle("dark-mode");
  }
  else
  {
    themebtn.textContent = "Dark Theme";
    themebtn.classList.toggle("dark-mode");
    sideTheme.classList.toggle("dark-mode");
    textTheme.classList.toggle("dark-mode");
    noteBtn.classList.toggle("dark-mode");
    saveBtn.classList.toggle("dark-mode");
    cancelBtn.classList.toggle("dark-mode");
  }
}


function hide()
{
if (cancelBtn.style.display === "none") {
  cancelBtn.style.display = "block";
}
  else{
  cancelBtn.style.display = "none";
  saveBtn.style.display = "none";
  textTheme.style.display = "none";
}
}

function show()
{
  if (noteBtn.textContent === "New Note") {
  const textarea = document.querySelector("textarea");
  cancelBtn.style.display = "initial";
  saveBtn.style.display = "initial";
  textTheme.style.display = "flex";
  textarea.value = "";} 
}
var notesArray = [
  {title:"note one", body:"this is my first note"}, 
];

function savingText()
{
 var title = prompt("What title do you wish to put note in?")
 var body = document.getElementById('text').value;
 notesArray.push({title,body})
}

themebtn.addEventListener('click', changeTheme);
cancelBtn.addEventListener('click', hide);
noteBtn.addEventListener('click', show);
saveBtn.addEventListener('click', savingText);