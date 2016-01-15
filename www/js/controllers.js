angular.module('thunder.controllers', ['ionic', 'thunder.services'])

  /*
  Controller for the discover page
  */
  .controller('DiscoverCtrl', function($scope, $timeout, User) {
    $scope.products = [
      {
        "name": "LinkedIn ProFinder",
        "tagline": "A new way to hire freelancers from LinkedIn",
        "discussion_url": "https://www.producthunt.com/tech/linkedin-profinder-2",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/77fdeb2d4df2c4813d5c61384b22a33f/png/?thumbnail_max_width=850&url=https%3A%2F%2Fgoo.gl%2F1jUSIw",
        "product_url": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=1948"
      },
      {
        "name": "K Blocker",
        "tagline": "Kardashian content blocker for iOS",
        "discussion_url": "https://www.producthunt.com/tech/k-blocker",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/d7a68a8f35cda14414482f82a266e4ac/png/?thumbnail_max_width=850&url=http%3A%2F%2Fkblocker.co",
        "product_url": "https://www.producthunt.com/r/1239ed9df03056/40854?app_id=1948"
      },
      {
        "name": "HangoverApp",
        "tagline": "Share photos with friends, only visible when you're together",
        "discussion_url": "https://www.producthunt.com/tech/hangoverapp",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/f05f2b63763cc446bef17ba748c9e14a/png/?thumbnail_max_width=850&url=http%3A%2F%2Fwww.hangoverapp.com",
        "product_url": "https://www.producthunt.com/r/8a94554894f2bb/40912?app_id=1948"
      },
      {
        "name": "43 Layers",
        "tagline": "Teespring for event decorations and gifts",
        "discussion_url": "https://www.producthunt.com/tech/43-layers",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/ec770fa05c7ce60a4e07ccc074dddf28/png/?thumbnail_max_width=850&url=https%3A%2F%2Fwww.43layers.com%2Fproducts%2Fspecial%2FProduct-Hunt",
        "product_url": "https://www.producthunt.com/r/b704ae84e992e1/41413?app_id=1948"
      }
    ];

    // initialize current product
    $scope.currentProduct = angular.copy($scope.products[0]);

    // fired when we favorite or skip a product
    $scope.sendFeedback = function(bool) {
      // first, add to favorites if they favorited
      if (bool) User.addProductToFavorites($scope.currentProduct);

      // set the variable for the correct animation sequence
      $scope.currentProduct.rated = bool;
      $scope.currentProduct.hide = true;

      // $timeout to allow animation to complete before changing to the next product
      $timeout(function() {
        // get the index of a random product
        var randomProductIndex = Math.round(Math.random() * ($scope.products.length - 1));

        // update current product in scope
        $scope.currentProduct = angular.copy($scope.products[randomProductIndex]);

      }, 250);
    }
  })

  /*
  Controller for the favorites page
  */
  .controller('FavoritesCtrl', function($scope, User) {
    // get the list of our favorites from our user service
    $scope.favorites = User.favorites;

    $scope.removeProduct = function(product, index) {
      User.removeProductFromFavorites(product, index);
    }
  })


  /*
  Controller for our splash page
  */
  .controller('SplashCtrl', function($scope) {})

  /*
  Controller for our tabs
  */
  .controller('TabsCtrl', function($scope) {})
