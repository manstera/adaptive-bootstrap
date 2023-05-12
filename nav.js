let navGroup = document.querySelector(".nav-group")
let navIcon = document.querySelector(".nav")
let closeIcon = document.querySelector(".cross")



navIcon.addEventListener("click", showMenu)
closeIcon.addEventListener("click", closeMenu)

function showMenu(){
	navGroup.style.display = "flex";
	navIcon.style.display = "none";
}

function closeMenu(){
	navGroup.style.display = "none";
	navIcon.style.display = "flex";
}