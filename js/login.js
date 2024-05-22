import loadPageContent from "./content.js";

function generateLoginPage() {
    return `
<main>
    <div class="login-container">
        <form action="#">
            <div class="input-icon">
                <i class="fa-solid fa-user icon"></i>
                <input type="text" name="email" class="email" placeholder="Email" autocomplete="off" required>
            </div>
            <div class="input-icon">
                <i class="fa-solid fa-lock icon"></i>
                <input type="password" name="password" placeholder="Password" autocomplete="off" required>
            </div>
            <div id="troubleshoot">
                <div class="remember">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Remember Me</label>
                </div>
            </div>
            <div class="register-link">
                <a href="#" id="register-link" data-page="register">First time user? Click here to Register</a>
            </div>
            <button id="login"> Login </button>
        </form>
    </div>
</main>
`;
}

function addEventListenerToRegister() {
    // load respective nav page content on click
    let registerLink = document.getElementById('register-link');
    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        // Load the content for the clicked page
        loadPageContent(page);
    });
}

export { generateLoginPage, addEventListenerToRegister };