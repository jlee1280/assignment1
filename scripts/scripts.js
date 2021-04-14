const themebtn = document.querySelector(".dark-theme");
const sideTheme = document.querySelector("body, h1");
const textTheme = document.querySelector(".fourth-container");
const btnsTheme = document.querySelector(".new-note");
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
 btnsTheme.classList.toggle("dark-mode");
 saveBtn.classList.toggle("dark-mode");
 cancelBtn.classList.toggle("dark-mode");
  }
  else
  {
    themebtn.textContent = "Dark Theme";
    themebtn.classList.toggle("dark-mode");
    sideTheme.classList.toggle("dark-mode");
    textTheme.classList.toggle("dark-mode");
    btnsTheme.classList.toggle("dark-mode");
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




themebtn.addEventListener('click', changeTheme);
cancelBtn.addEventListener('click', hide);
