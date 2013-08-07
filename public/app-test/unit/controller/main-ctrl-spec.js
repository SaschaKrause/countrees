'use strict';

/* jasmine specs for controllers go here */
describe('Main Controller', function () {

//  debugger
  beforeEach(function () {
    this.addMatchers({
      toEqualData: function (expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('controller.main'));

  describe('MainCtrl', function () {
    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {

      scope = $rootScope.$new();
      ctrl = $controller('MainCtrl', {$scope: scope});
    }));

    it('should contain ', function () {
      expect( scope.message).toEqual('Hello World.');
    });
  });
});