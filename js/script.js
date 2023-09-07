const header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
    header.classList.toggle("sticky",window.scrollY > 50)
})


const lilink = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu(){
    let secLenght = section.length;
    while(--secLenght && window.scrollY +500 < section[secLenght].offsetTop){}
    liLink.forEach(sec => sec.classList.remove("active"));
    liLink[secLenght].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);



//active menu icon

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}