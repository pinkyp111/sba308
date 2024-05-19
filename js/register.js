function generateRegistrationPage() {
    return `
        <main>
            <div class="login-container">
                <form action="#">
                    <div class="input-icon">
                        <i class="fa-solid fa-user icon"></i>
                        <input type="text" name="username" class="username" placeholder="Username" autocomplete="off">
    
                    </div>
                    <div class="input-icon">
                        <i class="fa-solid fa-envelope icon"></i>
                        <input type="text" name="email" placeholder="Email" autocomplete="off">
                    </div>
                    <div class="input-icon">
                        <i class="fa-solid fa-lock icon"></i>
                        <input type="text" name="password" placeholder="Password" autocomplete="off">
                    </div>
                    <div class="input-icon">
                        <i class="fa-solid fa fa-phone icon"></i>
                        <input type="text" name="phonenumber" placeholder="Phonenumber" autocomplete="off">
                    </div>
    
    
                    <div id="troubleshoot">
                        <div class="remember">
                            <input type="checkbox" name="remember" id="remember">
                            <label for="remember">Remember Me</label>
                        </div>
                        <div class="forgotPassword">
                            <a href="#" id="forgotPassword">Forgot pasword?</a>
                        </div>
                    </div>
                    <button id="login"> Sign Up </button>
                </form>
            </div>
        </main>
`;
}

export default generateRegistrationPage;