'use strict';

/* jasmine specs for the {%= name %} controller */
describe('{%= capitalizedName %}{%= capitalizedSuffix %}', function () {

  beforeEach(module('controller.{%= name %}'));

  var scope, ctrl;

  beforeEach(inject(function ($rootScope, $controller) {

    scope = $rootScope.$new();
    ctrl = $controller('{%= capitalizedName %}{%= capitalizedSuffix %}', {$scope: scope});
  }));

  it('should contain the correct message', function () {
    expect(scope.message).toEqual('Hello World.');
  });

});