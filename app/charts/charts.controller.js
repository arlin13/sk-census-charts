(function() {
    'use strict';

    angular
        .module('app')
        .controller('ChartsController', ChartsController);

    ChartsController.$inject = ['inqstatsFactory'];

    /* @ngInject */
    function ChartsController(inqstatsFactory) {
        var vm = this;
        inqstatsFactory
            .getData("population")
            .then(function(data) {
                var reformattedArray = data.population.map(function(obj) {
                    var rObj = {};
                    rObj.x = obj.year;
                    rObj.y = obj.data;
                    return rObj;
                });

                console.log(reformattedArray);
            })
            .catch(function(error) {
                console.log(error);
            })

        /* -- STEP 5: GIVE THE DATA TO ANGULAR CHART -->
        Done that? Great!
        Next up, for Angular Chart, you only need to use the `chart-data` and
        `chart-label` directives in order to get one up and running.
        You'll need a data structure like this to house the massaged data from step 2.
        ```js
        vm.bigMac = {
          data: [4.4, 4.1, 3.8] // while literal in this example, this will really be the result of the call to the .map function.
          labels: ['2014', '2015', '2016'] // see above comment, same applys here.
        }
        ```
        Once you've finished all this, you can move to ../index.html for Step 6 - building the UI!
        */

        vm.bigMac = {
            data: [4.4, 4.1, 3.8], // while literal in this example, this will really be the result of the call to the .map function.
            labels: ['2014', '2015', '2016'] // see above comment, same applys here.
        }
    }
})();
