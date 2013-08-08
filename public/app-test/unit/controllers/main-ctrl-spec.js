'use strict';

/* jasmine specs for controllers go here */
describe('MainCtrl', function () {

  beforeEach(module('service.rest'));
  beforeEach(module('controller.main'));

  var scope, ctrl;

  beforeEach(inject(function ($rootScope, $controller) {

    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {$scope: scope});
  }));

  it('should contain the correct message', function () {
    expect(scope.message).toEqual('Hello World.');
    expect(scope.dings).toEqual(42);
  });

});