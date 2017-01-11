angular.module("packlinkApp", [])
    .controller("commonCtrl", ['$scope', '$http', 'dictionaryLoader', function($scope, $http, dictionaryLoader) {
        $scope.dictionary = null;
        $scope.availableLangs = null;

        dictionaryLoader.loadAvailableLangs(function(response){
            $scope.availableLangs = response;
        });
        $scope.loadDictionary = function() {
            dictionaryLoader.loadDictionary(function (response) {
                $scope.dictionary = response;
            });
        };
        $scope.setCurrentLang = function(lang){
            dictionaryLoader.setCurrentLang(lang);
        };

        $scope.$watch(function(){
            return dictionaryLoader.currentLang;
        }, function (newValue, oldValue) {
            if (newValue == oldValue){
                return;
            }
            $scope.loadDictionary();
        }, true);

        $scope.loadDictionary();
    }])
    .controller("servicesCtrl", function ($scope, $http) {
        $scope.today = new Date();
        $scope.predicate = '';
        $scope.services = null;
        $http({
            method: 'GET',
            url: 'assets/data/services.json'})
            .success(function (data) {
                $scope.services = data;
            });

        $scope.getEndHour = function (transit_hours) {
            var date = new Date();
            var plus_days = Math.round(transit_hours / 24);
            date.setDate(date.getDate() + plus_days);
            return date;
        };
    });
