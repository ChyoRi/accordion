const mainMenuList = document.querySelectorAll('a');
const subMenuWrap = document.querySelector('.sub_menu_wrap');

console.log(mainMenu);
console.log(subMenuWrap);

const clickHandler = (e) => {
    e.preventDefault();
    e.target.classList.add('active_btn');
    subMenuWrap.classList.add('active');
}


mainMenuList.forEach((mainmenu) => mainmenu.addEventListener('click', clickHandler));