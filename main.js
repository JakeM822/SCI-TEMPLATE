function highlightNav(event) {
    const links = document.querySelectorAll('.nav-bar a');
    links.forEach(link => link.classList.remove('active'));

    event.target.classList.add('active');
}

function toggleMenu() {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

function highlightNav(event) {
    document.querySelectorAll(".nav-bar a").forEach(link => {
        link.classList.remove("active-link");
    });
    event.target.classList.add("active-link");
}
