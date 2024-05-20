import generateBooksPage from "./book.js";
import generateRegistrationPage from "./register.js";
import generateHomePage from "./home.js";
import generateCommunityPage from "./community.js";

// Attach the event listener to the nav container
document.querySelector('nav').addEventListener('click', function (event) {
    // Check if the clicked element is an anchor tag
    if (event.target.tagName === 'A') {
        toggleActiveClass(event);
    }
});

// load respective nav page content on click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        // Load the content for the clicked page
        loadPageContent(page);
    });
});

// make home page active on page load
window.onload = function () {
    document.getElementById('homeNav').click();
};

// Function to toggle 'active' class on click
function toggleActiveClass(event) {
    // Query all nav items
    var navItems = document.querySelectorAll('nav a');

    // Remove 'active' class from all nav items
    navItems.forEach(function (navItem) {
        navItem.classList.remove('active');
    });

    // Add 'active' class to the clicked nav item
    event.target.classList.add('active');
}

// load nav page content
function loadPageContent(page) {
    if (page === 'book') {
        let elemVal = generateBooksPage();
        replaceContentInContainer("content", elemVal);
    } else if (page === 'home') {
        let elemVal = generateHomePage();
        replaceContentInContainer("content", elemVal);
    } else if (page === 'register') {
        let elemVal = generateRegistrationPage();
        replaceContentInContainer("content", elemVal);
    } else if (page === 'community') {
        let elemVal = generateCommunityPage();
        replaceContentInContainer("content", elemVal);
    }

}

// add html dynamically to given html element
function replaceContentInContainer(id, content) {
    let container = document.getElementById(id);
    container.innerHTML = content;
}

