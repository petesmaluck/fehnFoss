'use strict';

 /* App Module */

var app = angular.module('myApp.service',['myApp.service']);


app.config(function($routeProvider) {
    $routeProvider.
      when('/dimepiece', {
        templateUrl: 'partials/dimepiece.html',
        controller: 'dimepiece'
      }).
      when('/ibiki', {
        templateUrl: 'partials/ibiki.html',
        controller: 'ibiki'
      }).
      when('/mtl_highways', {
        templateUrl: 'partials/mtl_highways.html',
        controller: 'mtl_highways'
      }).
      when('/nebula', {
        templateUrl: 'partials/nebula.html',
        controller: 'nebula'
      }).
      when('/photo_diary', {
        templateUrl: 'partials/photo_diary.html',
        controller: 'photo_diary'
      }).
      when('/portrait_projects', {
        templateUrl: 'partials/portrait_projects.html',
        controller: 'portrait_projects'
      }).
      otherwise({
         redirectTo: '/'
       });
   });
