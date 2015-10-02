movieReviewSite.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};

    factory.reviews = [
        {
            movieName: "JAWS",
            movieReview: "Super, super bitey",
            id: 1
        },
        {
            movieName: "Sleeping in Seattle",
            movieReview: "Put me to sleep",
            id: 2
        },
        {
            movieName: "Star Trek",
            movieReview: "This one's a documentary, right?",
            id: 3
        }
    ]

    factory.addReview = function() {
        factory.reviews.push(
            {
                name: factory.movieName,
                review: factory.movieReview,
                id: factory.reviews.length + 1
            }
        );
        // console.log(factory.movieName);

        factory.movieName = null;
        factory.movieReview = null;
    }

    return factory;
})
