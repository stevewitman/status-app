(function() {

  'use strict';

  angular
    .module('statusApp')
    .factory('Status', StatusService);

  function StatusService($firebaseArray) {
    var ref = new Firebase("https://sw-001.firebaseio.com/status");
    return $firebaseArray(ref);
  }

})();
