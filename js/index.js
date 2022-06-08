const mainMenu = document.querySelectorAll('.main_menu');
const btn = document.getElementsByTagName('button');
const subMenuWrap = document.querySelector('.sub_menu_wrap');

console.log(mainMenu);
console.log(btn);
console.log(subMenuWrap);

const clickHandler = (e) => {
    console.dir(e);
    // btn.classList.add('active_btn');
    subMenuWrap.classList.toggle('active');
}


mainMenu.forEach((item) => item.addEventListener('click', clickHandler));