module.exports = {
    test: client=> {
        //verify that user can create a repository & delete the repository
        const githubPage = 'https://github.com/';
        let testEmail = 'nakic98313@mainmile.com';
        let testPassword = 'dkrlig93856';
        let verificationText = 'nakic98/proov';
        let repoName = 'proov';
        let repoPage = 'https://github.com/nakic98/proov';

        const selectors = {
            homePageBody: '.home-campaign-hero',
            signInButton: "[href='/login']",
            logInBody: '#login',
            emailField: '#login_field',
            passwordField: '#password',
            submitSignInButton: "[type='submit']",
            loggedInPage: '.logged-in',

            repoNameField: '[name="repository[name]"]',
            createRepoButton: '#new_repository button',
            repoPage: '.repository-content',

            githubLogo: "[href='https://github.com/']",
            feedSidebarBody: '.feed-left-sidebar',
           
            repository: '[data-filterable-for="dashboard-repos-filter-left"]:first-child',
            settingsButton: '#settings-tab',
            settingsPageBody: '#repo-content-turbo-frame',
            deleteRepoButton: '#dialog-show-repo-delete-menu-dialog',
            popUpBody: '#repo-delete-menu-dialog',
            popUpDeleteRepoButton: '#repo-delete-proceed-button',
            popUpDeletingWarning: '#repo-delete-warning-container',
            popUpVerificationField: '#verification_field',
        }

        const setUp = () => {
            client
            .url(githubPage)
            .waitForElementVisible(selectors.homePageBody)
            .waitForElementVisible(selectors.signInButton)
            .click(selectors.signInButton)
            .waitForElementVisible(selectors.logInBody)
            .sendKeys(selectors.emailField, testEmail)
            .sendKeys(selectors.passwordField, testPassword)
            .click(selectors.submitSignInButton)
            .waitForElementVisible(selectors.loggedInPage)
        };

        const createRepository = () => {
            client
            .sendKeys(selectors.repoNameField, repoName)
            .click(selectors.createRepoButton)
            .waitForElementVisible(selectors.repoPage)
        };

        const checkRepoExists = () => {
            client
            .click(selectors.githubLogo)
            .waitForElementVisible(selectors.feedSidebarBody)
            .pause(5000)
            .saveScreenshot('/Users/sigritertel/Desktop/TDL School/finalTask/screenshot/createdRepo.png')
        
        }

        const deleteRepository = () => {
            client
            .url(repoPage)
            .waitForElementVisible(selectors.repoPage)
            .click(selectors.settingsButton)
            .waitForElementVisible(selectors.settingsPageBody)
            .click(selectors.deleteRepoButton)
            .waitForElementVisible(selectors.popUpBody)
            .click(selectors.popUpDeleteRepoButton)
            .waitForElementVisible(selectors.popUpDeletingWarning)
            .click(selectors.popUpDeleteRepoButton)
            .waitForElementVisible(selectors.popUpVerificationField)
            .sendKeys(selectors.popUpVerificationField, verificationText)
            .click(selectors.popUpDeleteRepoButton)
          
        }

        const checkRepoDeleted = () => {
            client
            .click(selectors.githubLogo)
            .waitForElementVisible(selectors.feedSidebarBody)
            .pause(5000)
            .saveScreenshot('/Users/sigritertel/Desktop/TDL School/finalTask/screenshot/deletedRepo.png')
        
        }

        setUp();
        createRepository();
        checkRepoExists();
        deleteRepository();
        checkRepoDeleted();


    }
}