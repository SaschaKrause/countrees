'use strict';

/* jasmine specs for the {%= name %} service */
describe('{%= capitalizedName %}{%= capitalizedSuffix %}', function () {

  beforeEach(module('service.{%= name %}'));

  var service;

  beforeEach(inject(function ({%= capitalizedName %}{%= capitalizedSuffix %}) {

    service = {%= capitalizedName %}{%= capitalizedSuffix %};
  }));

  it('should contain the correct answer', function () {
    expect(service.answer).toEqual(42);
  });

});
