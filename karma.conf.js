var webpack = require('karma-webpack');

module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine', 'sinon' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*.test.js'
    ],
    plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter', 'karma-sinon'],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'test/**/*.test.js': ['webpack'],
      'core/**/*.js': ['webpack']
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: {
      module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime', 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            }]
        }
    },
    webpackMiddleware: { noInfo: true }
  });
};

// module.exports = function (config) {
//   config.set({
//     files: [
//       'node_modules/babel-polyfill/dist/polyfill.js',
//       'test/**/*.js'
//     ],
//     preprocessors: {
//       'core/**/*.js': ['babel'],
//       'test/**/*.js': ['babel']
//     },
//     babelPreprocessor: {
//       options: {
//         presets: ['es2015', 'stage-0', 'react'],
//         sourceMap: 'inline'
//       },
//       filename: function (file) {
//         return file.originalPath.replace(/\.js$/, '.es5.js');
//       },
//       sourceFileName: function (file) {
//         return file.originalPath;
//       }
//     },
//     plugins: [
//      'karma-jasmine',
//      'karma-chrome-launcher',
//      'karma-sinon',
//      'karma-babel-preprocessor',
//     ],
//     frameworks: [
//         'jasmine',
//         'sinon'
//     ],
//     browsers: ['Chrome']
//   });
// };

// module.exports = function(config) {
//     config.set({
//         // ... normal karma configuration

//         files: [
//             'test/*.test.js',
//             'test/**/*.test.js'
//             // each file acts as entry point for the webpack configuration
//         ],
        
//         frameworks: [
//             'jasmine',
//             'jasmine-matchers',
//             'phantomjs-shim',
//             'sinon'
//         ],

//         preprocessors: {
//             // add webpack as preprocessor
//             'test/*.test.js': ['webpack'],
//             'test/**/*.test.js': ['webpack']
//         },

//         webpack: {
//             // karma watches the test entry points
//             // (you don't need to specify the entry option)
//             // webpack watches dependencies

//             // webpack configuration
//         },

//         webpackMiddleware: {
//             // webpack-dev-middleware configuration
//             // i. e.
//             noInfo: true
//         }
//     });
// };

// module.exports = function (config) {
//     config.set({
//         basePath: '',

//         captureTimeout: 30000,
//         browserDisconnectTimeout: 5000,
//         browserDisconnectTolerance: 3,
//         browserNoActivityTimeout: 30000,

//         frameworks: [
//             'jasmine',
//             'jasmine-matchers',
//             'phantomjs-shim',
//             'sinon'
//         ],

//         plugins: [
//             'karma-babel-preprocessor',
//             'karma-coverage',
//             'karma-phantomjs-launcher',
//             'karma-jasmine',
//             'karma-jasmine-matchers',
//             'karma-chrome-launcher',
//             'karma-ng-html2js-preprocessor',
//             'karma-phantomjs-shim',
//             'karma-junit-reporter',
//             'karma-sinon'
//         ],

//         files: [
//             //'core/**/*.js',
//             'test/**/*.js'
//         ],

//         exclude: [],

//         preprocessors: {
//             //'core/**/*.js': ['babel', 'coverage'],
//             'core/**/*.test.js': ['babel', 'coverage']
//         },

//         // 'babelPreprocessor': {
//         //     options: {
//         //         sourceMap: 'inline',
//         //         modules: 'system'
//         //     }
//         // },
        
//         babelPreprocessor: {
//             options: {
//                 presets: ['es2015'],
//                 sourceMap: 'inline'
//             },
//             filename: function (file) {
//                 return file.originalPath.replace(/\.js$/, '.es5.js');
//             },
//             sourceFileName: function (file) {
//                 return file.originalPath;
//             }
//         },

//         coverageReporter: {
//             instrumenterOptions: {
//                 istanbul: { noCompact: true }
//             }
//         },

//         reporters: ['progress', 'coverage'],

//         port: 9876,

//         colors: true,

//         logLevel: config.LOG_INFO,

//         autoWatch: true,

//         browsers: ['PhantomJS'],

//         phantomjsLauncher: {
//             exitOnResourceError: true,
//             options: {
//                 settings: {
//                     resourceTimeout: 30000
//                 }
//             }
//         },

//         singleRun: true
//     });
// };
