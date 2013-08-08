'use strict';

/* jasmine specs for the rest service */
describe('RestService', function () {

  beforeEach(module('service.rest'));

  var $httpBackend, service;

  beforeEach(inject(function(RestService, _$httpBackend_) {
    service = RestService;
    $httpBackend = _$httpBackend_;
  }));

  it('should contain the correct answer', function () {
    expect(service.answer).toEqual(42);
  });

});