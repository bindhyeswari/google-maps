/* global console:false, google:false */
/*jshint unused:false */
'use strict';

function onGoogleReady() {
    // We bootstrap the app once google maps is ready.
    angular.bootstrap(document, ['app']);
}

// This module consists of all controllers, directive, etc related to the map
var myAppModule = angular.module('app.ui-map', ['ui.map']);
// Put the controllers in place
angular.module('app.ui-map', ['ui.map'])
    .controller('MapCtrl', ['$scope', function ($scope) {

        $scope.myMarkers = [];

        $scope.mapOptions = {
            center: new google.maps.LatLng(35.784, -78.670),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.addMarker = function ($event, $params) {
            $scope.myMarkers.push(new google.maps.Marker({
                map: $scope.myMap,
                position: $params[0].latLng
            }));
        };

        $scope.setZoomMessage = function (zoom) {
            $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
            console.log(zoom, 'zoomed');
        };

        $scope.openMarkerInfo = function (marker) {
            $scope.currentMarker = marker;
            $scope.currentMarkerLat = marker.getPosition().lat();
            $scope.currentMarkerLng = marker.getPosition().lng();
            $scope.myInfoWindow.open($scope.myMap, marker);
        };

        $scope.setMarkerPosition = function (marker, lat, lng) {
            marker.setPosition(new google.maps.LatLng(lat, lng));
        };
    }])
;

// This is the base app, that consists of your controllers, directives etc
var app = angular.module('app', ['app.ui-map']).controller('InfoController', function ($scope) {
    $scope.message = 'Rashmika and Jui: This is app is where your controllers, services and directives will go.';
    $scope.message2 = 'Click to create markers ... ';
});