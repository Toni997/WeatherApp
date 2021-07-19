// CONTROLLERS
app.controller('homeController', [
  '$scope',
  '$location',
  'postIdService',
  function ($scope, $location, postIdService) {
    $scope.city = postIdService.city;

    $scope.$watch('city', function () {
      postIdService.city = $scope.city;
    });
    $scope.submit = function () {
      $location.path('/posts');
    };
  },
]);

app.controller('postsController', [
  '$scope',
  '$routeParams',
  '$http',
  'postsService',
  function ($scope, $routeParams, $http, postsService) {
    // $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    $scope.posts = null;

    postsService.GetPosts().then((res) => {
      $scope.$apply(() => {
        $scope.posts = res;
      });
    });

    $scope.convertToCelsius = function (degK) {
      return (degK - 273.15).toFixed(2);
    };

    $scope.convertToDate = function (dt) {
      return new Date(dt * 1000);
    };
  },
]);
