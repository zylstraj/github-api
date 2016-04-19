'use strict';

const angular = require('angular');

const app = angular.module('GithubApp', [])

app.controller('RepoController', ['$http', function($http) {
  const mainRoute = 'https://api.github.com/users/zylstraj/repos';
  var okay = this;
  okay.myRepos = [];
  okay.getRepos = function() {
      $http.get(mainRoute)
      .then(function(result) {
        console.log(result.data);
        //okay.articles = result.data.articles;
        okay.myRepos = result.data;
      }, function(error) {
      })
}
}]);

app.controller('AboutMeController', ['$http', function($http) {
  const mainRoute = 'https://api.github.com/users/zylstraj';
  var okay = this;
  okay.myInfo = [];
  // okay.myFollowers = [];
  // okay.myFollowing = [];
  // okay.myAvatar = [];
  okay.getMyInfo = function() {
    $http.get(mainRoute)
    .then(function(result) {
      console.log(result.data);
      okay.myInfo = result.data;
      // okay.myFollowers = result.data.followers_url;
      // okay.myFollowing = result.data.following_url;
      // okay.myAvatar = result.data.avatar_url;
    }, function(error) {
      console.log(error);
    })
  }
}]);
