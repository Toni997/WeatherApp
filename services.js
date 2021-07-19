// SERVICES
app.service('postIdService', function () {
  this.postId = '1';
});

app.service('postsService', [
  '$http',
  function ($http) {
    return {
      GetPosts: async () => {
        var res = await $http.get(
          `https://jsonplaceholder.typicode.com/todos/`
        );
        return res.data;
      },
    };
  },
]);
