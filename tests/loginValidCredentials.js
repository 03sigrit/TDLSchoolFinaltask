module.exports = {
    test: client=> {
        //check login functionality with valid username and password
        const githubPage = 'https://github.com/';
        let testEmail = 'nakic98313@mainmile.com';
        let testPassword = 'dkrlig93856';

        const selectors = {
            homePageBody: '.home-campaign-hero',
            signInButton: "[href='/login']",
            logInBody: '#login',
            emailField: '#login_field',
            passwordField: '#password',
            submitSignInButton: "[type='submit']",
            loggedInPage: '.logged-in'
        }

        const homePage = () => {
            client
            .url(githubPage)
            .waitForElementVisible(selectors.homePageBody)
            .waitForElementVisible(selectors.signInButton)
            .verify.urlEquals(githubPage)
            .click(selectors.signInButton)
        };

        const signInPage = () => {
            client
            .waitForElementVisible(selectors.logInBody)
            .sendKeys(selectors.emailField, testEmail)
            .sendKeys(selectors.passwordField, testPassword)
            .click(selectors.submitSignInButton)
        };

        const loggedInPage = () => {
            client
            .waitForElementVisible(selectors.loggedInPage)
        }

        homePage();
        signInPage();
        loggedInPage();

    }
}