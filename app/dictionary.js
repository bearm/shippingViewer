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
                    return response;
                });
        };
    });
