// DIRECTIVES
app.directive('singlePost', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/SinglePost.htm',
    replace: true,
    scope: {
      post: '=',
    },
  };
});
