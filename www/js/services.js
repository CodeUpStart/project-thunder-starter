angular.module('thunder.services', [])
  .factory('User', function() {
    var o = {
      favorites: []
    }

    o.addProductToFavorites = function(product) {
      // make sure there's a product to add
      if (!product) return false;

      // add to favorites array
      o.favorites.unshift(product);
    }

    o.removeProductFromFavorites = function(product, index) {
      // make sure there's a product to remove
      if (!product) return false;

      // remove from favorites array
      o.favorites.splice(index, 1);
    }
    return o;
  });
