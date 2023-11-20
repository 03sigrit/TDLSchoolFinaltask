#TDl Autumn School Final Project - Web Automation with Nightwatch.js

##Project description
    Test automation project using Node.js 
    Application under test: https://www.github.com
    Node version v20.9.0 & npm version 10.1.0 & Nightwatch version 3.1.3 are used in this project

###Installing the project
    Install nodejs https://nodejs.org/en.
    You can check if it is installed with node -v and npm -v

##Nightwatch
   In Nightwatch config file:

        First the location where the tests are is specified. 

        Under test_settings, the test environments are defined. Default environment is Chrome and then the second environment firefox is added.

        test_workers setting is added and set "true" to enable running tests suites in parallel. "workers" determines the number of workers. 

        screenshots setting enables to save screenshots. 

##Running tests
    You need to be located in the project folder
    To run all tests: 
        npm test
    To run a specific test: 
        npm test -- -t {src}/{test}
    To run tests in a specif browser: 
        npm test -- --env{browser}
    To run tests in parallell you need to: 
        change workers option in nightwatch config file from auto to the desired number. 


! Before running createAndDeleteRepo.js, update .saveScreenshot path's to the path you have on your computer. Line 62 & 88.