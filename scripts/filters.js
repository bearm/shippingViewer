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