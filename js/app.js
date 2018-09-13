console.log("everything connected");
const app = angular.module('GregZera', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/about',{
    templateUrl: '../views/about.html'
  })
  .when('/contact', {
    templateUrl: '../views/contact.html'
  })
  .when('/events', {
    templateUrl: '../views/events.html'
  })
  .when('/home', {
    templateUrl: '../views/home.html'
  })
  .when('/services', {
    templateUrl: '../views/services.html'
  })
  .when('/testimonial',{
    templateUrl: '../views/testimonial.html'
  })
  .otherwise({
    templateUrl: '../views/home.html'
  })
});