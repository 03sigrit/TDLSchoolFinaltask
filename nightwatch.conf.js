module.exports = {
  src_folders: ['tests'],
  webdriver: {
      start_process: true,
      port: 4444
  },
  
  test_settings: {
      default: {
        test_workers: {
            enabled: true,
            workers: "auto"
        },
        screenshots : {
            enabled : false,
            on_failure : true,
            path : "./screens"
        },
        desiredCapabilities: {
              browserName: 'chrome'
        },
        webdriver: { server_path: require('chromedriver').path }
      },
      
      firefox: {
          desiredCapabilities: {
              browserName: 'firefox'
          },
          webdriver: { server_path: require('geckodriver').path }
      }
  }
};