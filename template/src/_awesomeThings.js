'use strict';

angular.module('<%= _.camelize(moduleName) %>')
  .factory('awesomeThingsService', function () {
    var awesomeThingsList = [
      {
        thing: 'HTML5 Boilerplate',
        description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
      },
      {
        thing: 'AngularJS',
        description: 'AngularJS is a toolset for building the framework most suited to your application development.'
      },
      {
        thing: 'Karma',
        description: 'Spectacular Test Runner for JavaScript.'
      }
    ];

    return {
      getAwesomeThings: function () {
        return awesomeThingsList;
      }
    };
  });
