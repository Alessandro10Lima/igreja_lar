window.addEventListener("scroll", function(){
    let header = document.querySelector('#nav');
    header.classList.toggle('rolagem', window.scrollY > 0)
    
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.body = document.querySelector("body");

    this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
    this.navLinks.forEach((link) => {
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease`);
    });
    }

    handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    this.body.classList.toggle("no-scroll");
    }

    addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
    if (this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile__menu",
    ".menu",
    ".menu__itens__link"
);
mobileNavbar.init();

document.addEventListener("click", (event) => {
    const targetElement = event.target;
    const isMenuOpen = mobileNavbar.navList.classList.contains(mobileNavbar.activeClass);

    if (isMenuOpen && !targetElement.closest(".hero__navbar")) {
        mobileNavbar.handleClick();
    }
});

