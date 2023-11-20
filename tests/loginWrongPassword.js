module.exports = {
    test: client=> {
        //confirm that you can't login with wrong password
        const githubPage = 'https://github.com/';
        let alert;
        let testEmail = 'nakic98313@mainmile.com';
        let testPassword = 'wrongpassword';

        const selectors = {
            homePageBody: '.home-campaign-hero',
            signInButton: "[href='/login']",
            logInBody: '#login',
            emailField: '#login_field',
            passwordField: '#password',
            submitSignInButton: "[type='submit']",
            alertText: '.js-flash-alert'
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
            .waitForElementVisible(selectors.logInBody)
            .getText(selectors.alertText, ({ value }) => {
                alert = value;
                console.log(alert);
            });
        };


        homePage();
        signInPage();

    }
}