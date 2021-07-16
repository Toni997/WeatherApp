// SERVICES
weatherApp.service('cityService', function () {
  this.city = 'New York';
});

weatherApp.service('weatherService', [
  '$http',
  function ($http) {
    this.GetWeather = async function (city, days) {
      var res = await $http({
        method: 'GET',
        url: `https://community-open-weather-map.p.rapidapi.com/find?q=${city}&cnt=${days}`,
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key':
            '44e6fe78bemsh5949731699abf94p1fc826jsn4520083dfca0',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });
      // console.log(res.data);
      return res.data;
    };
  },
]);
