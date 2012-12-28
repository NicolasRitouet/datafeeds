'use strict';

datafeedsApp.controller('MainCtrl', function($scope) {

$scope.addDatafeed = function(datafeedTitle, datafeedUrl) {
	$scope.datafeeds.push({title:datafeedTitle, url:datafeedUrl});
};
	var datafeed = {title: 'Zalando NL', url: 'http:/test.com'};
	  $scope.datafeeds = [
	{
	title: 'Zalando',
	url: 'http://www.zalando.de/feeds.xml'  
	},
	{title: 'La Redoute',
	url: 'http://www.laredoute.fr'
	},
	{
	title: 'Orange',
	url: 'http://www.orange.fr'
	}
];
});
