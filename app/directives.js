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
			replace: true,
			templateUrl: "./views/service_items.html"
		}
	})
	.directive("serviceitem", function(){
		return {
			templateUrl: "./views/service_item.html"
		}
	})
	.directive("claimtime", function(){
		return {
			replace: true,
			restrict: 'E',
			scope: {
				date: '=',
				fromto: '='
			},
			template: "<div class='fromTo'>" +
				"<div class='calendar'>" +
					"<div class='date'>{{date | date:'dd'}}</div>" +
				"</div>" +
				"<div class='text'>" +
					"<div>{{fromto.text}}</div>" +
					"<div class='time'>{{fromto.time}}</div>" +
				"</div></div>"
		}
	});