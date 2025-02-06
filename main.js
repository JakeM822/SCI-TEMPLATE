function highlightNav(event) {
    // Remove 'active' class from all nav links
    const links = document.querySelectorAll('.nav-bar a');
    links.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    event.target.classList.add('active');
}