var app = angular.module('YelpForecast', ['ngResource']);
app.config(['$httpProvider', function($httpProvider) {  
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);


app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function($scope, element, attrs, model) {
            var options = {
                types: ['(cities)'],
                componentRestrictions: {}
            };
            $scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
 
            google.maps.event.addListener($scope.gPlace, 'place_changed', function() {

                var place = $scope.gPlace.getPlace();
                $scope.lat = place.geometry.location.lat();
                $scope.long = place.geometry.location.lng();

                $scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});


function YelpCtrl($scope, $resource, $http) {
    $scope.radius = 10;
    $scope.limit = 10;

    yelpBaseUrl = 'http://api.yelp.com/business_review_search'
    yelpAPI = 'II5osD1p-EMAwo40b6U31Q'	    
	$scope.yelp = $resource(yelpBaseUrl,
		{callback:'JSON_CALLBACK'},
		{get:{method:'JSONP'}});
	$scope.yelpSearch = function() {
		$scope.yelpResult = $scope.yelp.get({'term':$scope.food, 'lat':$scope.lat, 'long':$scope.long, 'radius': $scope.radius,  'limit': $scope.limit, 'ywsid': yelpAPI});
	}
	$scope.isEmpty = function() {
		if ($scope.yelpResult == undefined) {
			return true;
		}
	}

  // $http.get('yelp.json').success(function(data) {
  //   $scope.yelpResult = data;
  // });

 //    googleBaseUrl = 'http://maps.googleapis.com/maps/api/directions/json?'
	// $scope.google = $resource(googleBaseUrl,
	// 	{callback:'JSON_CALLBACK'},
	// 	{get:{method:'JSONP'}});

 //  $scope.getForecast = function(address, city, state, zip) {
	// 	$scope.origin = "16233 34th ave south, seatac wa 98188";
	//   	$scope.destination = address + " " + city + ", " + state + " " + zip;
	//   	console.log($scope.origin + '|' + $scope.destination);
	// 	$scope.googleResult = $scope.google.get({'origin': $scope.origin, 'destination': $scope.destination, 'sensor':'false'});
	// }


}

// app.factory('Search', function ($resource) {
//     return $resource('http://ws.spotify.com/search/1/artist.json?q=:term', {}, {
//         query: {
//             method: 'GET',
//             isArray: false,
//             params: {
//                 term: "bauhaus"
//             }
//         }
//     });
// });

// function MyCtrl($scope, Search) {
//     $scope.search = function (term) {
//         Search.get({
//             term: term
//         }, function (results) {
//             $scope.results = results
//             console.log(results);
//         });
//     }
// }







// return directions_data['resourceSets'][0]['resources'][0]+