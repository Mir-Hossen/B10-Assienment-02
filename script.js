let toggle = document.querySelector('.toggle');
let NavMenu = document.querySelector('.nav-menu');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    NavMenu.classList.toggle('active');
}