// ROUTES
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.htm',
      controller: 'homeController',
    })
    .when('/posts', {
      templateUrl: 'pages/posts.htm',
      controller: 'postsController',
    })
    .when('/posts/:id', {
      templateUrl: 'pages/posts.htm',
      controller: 'postsController',
    })
    .otherwise({
      redirectTo: '/',
    });
});
