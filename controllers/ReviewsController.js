movieReviewSite.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;

    if ($stateParams.reviewId) {
        $scope.selectedReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
    }
})
