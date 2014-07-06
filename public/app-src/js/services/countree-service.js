angular.module('service.countree', []).factory('CountreeService', [
    function() {
        "use strict";

        var service = {};

        service.getCountreeFromDate = function(date) {

            var dateCounterOption = {
                name: 'my date time count',
                updateIntervalInMilliseconds: 1000,
                dateTime: {
                    date: date
                }
            };

            var counter = new Countree();
            counter.setOptions(dateCounterOption);
            counter.init();

            return counter;

        }

        return service;
    }
]);