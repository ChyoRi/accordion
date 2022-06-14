const mainMenu = document.querySelectorAll('.main_contents');
// const subMenuWrap = document.querySelector('.sub_menu_wrap');

console.log(mainMenu);


function clickHandler(e) {
    const btn = this.children[0];
    const subMenuWrap = this.nextElementSibling;
    // console.log(btn);
    // console.log(e);
    // console.log(subMenuWrap);
    btn.classList.toggle('active_btn');
    // if (subMenuWrap)
    subMenuWrap.classList.toggle('active');
    if (subMenuWrap.style.maxHeight) {
        subMenuWrap.style.maxHeight = null;
    } else {
        subMenuWrap.style.maxHeight = subMenuWrap.scrollHeight + "px";
    }
}


mainMenu.forEach((item) => {
    item.addEventListener('click', clickHandler);
});