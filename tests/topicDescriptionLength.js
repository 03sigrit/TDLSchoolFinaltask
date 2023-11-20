module.exports = {
    test: client=> {
        // check that  the first topic description does not exceed 500 characters
        const githubTopicPage = 'https://github.com/topics/';

        const selectors = {
            homePageBody: '.home-campaign-hero',
            topicsMainbody: '.application-main',
            firstTopicBox: '.topic-box:first-of-type',
            firstTopicDescription: '.topic-box:first-of-type p:last-child'
        }

        const preparePage = () => {
            client
            .url(githubTopicPage)
            .waitForElementVisible(selectors.topicsMainbody)
            .waitForElementVisible(selectors.firstTopicBox)
        };

        const text = () => {
            client
            .getText(selectors.firstTopicDescription, ({value}) => {
                if(value.length < 500) {
                    console.log(value.length)
                }
                else {
                    throw new Error("Description exceeds the given 500 characters");
                }
            })

        };
     
       

        preparePage();
        text();

    }
}