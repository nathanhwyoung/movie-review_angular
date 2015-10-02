var movieReviewSite = angular.module('movieReviewSite', ['ui.router']);

movieReviewSite.config(function($stateProvider, $urlRouteProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
    });
})
