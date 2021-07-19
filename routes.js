// ROUTES
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({ enabled: true, requireBase: false });

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
