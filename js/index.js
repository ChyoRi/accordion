const mainMenuList = document.querySelectorAll('a');
const btn = document.getElementsByTagName('button');
const subMenuWrap = document.querySelector('.sub_menu_wrap');

console.log(mainMenuList);
console.log(subMenuWrap);
console.log(btn);

const clickHandler = (e) => {
    console.dir(e);
    e.preventDefault();
    btn.classList.add('active_btn');
    subMenuWrap.classList.toggle('active');
}


mainMenuList.forEach((item) => item.addEventListener('click', clickHandler));