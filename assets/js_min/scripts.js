angular.module("packlinkApp", [])
    .controller("commonCtrl", ['$scope', '$http', 'dictionaryLoader', function($scope, $http, dictionaryLoader) {
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
        $scope.date = new Date();
        $scope.predicate = '';
        $scope.services = null;
        $http({
            method: 'GET',
            url: 'assets/data/services.json'})
            .success(function (data) {
                $scope.services = data;
            })
            .error(function (x1, x2, x3) {
            });

        $scope.getEndHour = function (transit_hours) {
            var date = new Date();
            var plus_days = Math.round(transit_hours / 24);
            date.setDate(date.getDate() + plus_days);
            return date;
        };
    });

angular.module("packlinkApp")
    .service('dictionaryLoader', function($http) {
        this.currentLang = "es";

        this.setCurrentLang = function(lang) {
            this.currentLang = lang;
        };
        this.loadAvailableLangs = function(callback) {
            $http.get('assets/data/languages.json')
                .success(function(response) {
                    callback(response);
                })
        };
        this.loadDictionary = function(callback) {
            $http.get('assets/dictionary/' + this.currentLang + '.json')
                .success(function(response) {
                    callback(response);
                });
        };
    });

angular.module("packlinkApp")
	.directive("header", function(){
		return {
			templateUrl: "./views/header.html"
		}
	})
	.directive("footer", function(){
		return {
			templateUrl: "./views/footer.html"
		}
	})
	.directive("serviceitems", function(){
		return {
			restrict: 'E',
			replace:true,
			templateUrl: "./views/service_items.html"
		}
	})
	.directive("serviceitem", function(){
		return {
			templateUrl: "./views/service_item.html"
		}
	});

angular.module("packlinkApp")
    .filter("trust", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
    }])
    .filter("currency", function() {
        var currencies = {
            "EUR" : {
                "symbol" : "€",
                "position" : 2
            },
            "USD" : {
                "symbol" : "$",
                "position" : 1
            },
            "GBP" : {
                "symbol" : "₤",
                "position" : 2
            }
        };
        return function(amount, currency){
            if (currencies[currency].position == 1){
                return currencies[currency].symbol + " " + amount;
            }else{
                return amount + " " + currencies[currency].symbol;
            }
        }
    });