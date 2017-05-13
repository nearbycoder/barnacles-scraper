var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'], //run in Chrome
    singleRun: true, //just run once by default
    basePath: './',
    frameworks: ['jasmine'],
    plugins: [
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-coverage-istanbul-reporter'
    ],
    reporters: ['spec', 'coverage-istanbul'],
    files: [
      // all files ending in "_test"
      { pattern: 'test/*_test.js', watched: false },
      { pattern: 'test/**/*_test.js', watched: false },
      { pattern: 'src/*.js', watched: false }
      // each file acts as entry point for the webpack configuration
    ],
    preprocessors: {
      // add webpack as preprocessor
      'test/*_test.js': ['webpack', 'sourcemap'],
      'test/**/*_test.js': ['webpack', 'sourcemap'],
      'src/*.js': ['webpack', 'coverage']
    },
    webpack: {
      module: {
        rules: [
          // instrument only testing sources with Istanbul
          {
            test: /\.js$/,
            include: path.resolve('src/'),
            loader: 'istanbul-instrumenter-loader',
            query: {
              esModules: true
            }
          }
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      }
    }
  });
};
