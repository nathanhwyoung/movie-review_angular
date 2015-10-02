movieReviewSite.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};

    factory.addReview = function() {
        factory.reviews.push(
            {
                name: factory.movieName,
                review: factory.movieReview,
                id: factory.reviews.length + 1;
            }
        )
    }
})
