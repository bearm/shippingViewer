angular.module("packlinkApp")
	.directive("header", function(){
		return {
			templateUrl: "./templates/header.html"
		}
	})
	.directive("footer", function(){
		return {
			templateUrl: "./templates/footer.html"
		}
	})
	.directive("serviceitems", function(){
		return {
			restrict: 'E',
			replace:true,
			templateUrl: "./templates/service_items.html"
		}
	})
	.directive("serviceitem", function(){
		return {
			templateUrl: "./templates/service_item.html"
		}
	});