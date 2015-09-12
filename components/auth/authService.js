(function() {
  'use strict';

  angular
    .module('statusApp')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth) {
    var ref = new Firebase("https://sw-001.firebaseio.com");
    return $firebaseAuth(ref);
  }

})();
