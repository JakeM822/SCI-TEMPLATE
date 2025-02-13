document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-bar a");

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }

        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active-link"));
            this.classList.add("active-link");
        });
    });
});

function toggleMenu() {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

window.addEventListener("scroll", function() {
    let nav = document.querySelector(".nav");
    let title = document.querySelector(".header-container");

    if (window.scrollY >= title.offsetHeight) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});

window.onscroll = function() {
    toggleScrollButton();
};

function toggleScrollButton() {
    const button = document.getElementById("scrollToTopBtn");
    const title = document.querySelector(".header-container");
    
    if (title.getBoundingClientRect().bottom < 0) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
