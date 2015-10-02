var movieReviewSite = angular.module('movieReviewSite', ['ui.router']);

movieReviewSite.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
    });

    $stateProvider.state('reviews', {
        url: "/reviews",
        templateUrl: "partials/reviews.html",
        controller: 'ReviewsCtrl'
    });

    $stateProvider.state('reviews.detail', {
        url: "/:reviewId",
        templateUrl: "partials/reviews.detail.html",
        controller: 'ReviewsCtrl'
    });


})
