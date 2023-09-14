function menu(menu) {
    if (document.querySelector(menu)) {
        const menuBtnOpen = document.querySelector(".menu-open");
        const menuBtnClose = document.querySelector(".menu-close");
        const menu = document.querySelector(".header__menu");
        const headerImages = document.querySelectorAll(".header__menu-sub-list li img");

        menuBtnOpen.addEventListener("click", () => {
            document.querySelector(".wrapper").classList.add("lock")
            menu.classList.add("show");
        });

        menuBtnClose.addEventListener("click", () => {
            document.querySelector(".wrapper").classList.remove("lock")
            menu.classList.remove("show");
        });
    }
}

export default menu;