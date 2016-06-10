// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('coachingLandscape', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $logProvider, $compileProvider) {

  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.views.maxCache(0);
  var jsScrolling = (ionic.Platform.isAndroid() ) ? false : true;
  $ionicConfigProvider.scrolling.jsScrolling(jsScrolling);

  // uncomment these lines
  // $logProvider.debugEnabled(false);
  // $compileProvider.debugInfoEnabled(false);
  ///////////////////////////////////////////

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })
    // default route
   $urlRouterProvider.otherwise('/sign-in');

})
// controller start //
.controller('SignInCtrl', function ($scope, $ionicGesture) {
  'use strict';
  var onDrag, onRelease, dragElement, dragGesture, release, x, y, element, style, a, b;

  // x = 80;
  // y = 60;

  element = document.getElementById('dragElement')
  style = window.getComputedStyle(element)

  x = style.getPropertyValue('margin-left').split('px')[0];
  y = style.getPropertyValue('margin-top').split('px')[0];

  // console.log(a);
  // console.log(b);

  dragElement = angular.element(document.getElementById("dragElement"));

  onDrag = function (event) {
    var deltaX, deltaY;

    deltaX = event.gesture.deltaX;
    deltaY = event.gesture.deltaY;

    // console.log("dragging old values")
    // console.log(String(x + deltaX) + 'px');
    // console.log(String(y + deltaY) + 'px');
    // console.log("dragging new values")
    // console.log(String(parseFloat(a) + parseFloat(event.gesture.deltaX)) + 'px')
    // console.log(String(parseFloat(b) + parseFloat(event.gesture.deltaY)) + 'px')

    dragElement.css('margin-left', String(parseFloat(x) + parseFloat(event.gesture.deltaX)) + 'px');
    dragElement.css('margin-top', String(parseFloat(y) + parseFloat(event.gesture.deltaY)) + 'px');

  };

  onRelease = function (event) {
    // x = x + event.gesture.deltaX;
    // y = y + event.gesture.deltaY;

    x = parseFloat(x) + parseFloat(event.gesture.deltaX);
    y = parseFloat(y) + parseFloat(event.gesture.deltaY);

    // console.log("releasing old values")
    // console.log(x);
    // console.log(y);
    // console.log("releasing new values")
    // console.log(parseFloat(a) + parseFloat(event.gesture.deltaX))
    // console.log(parseFloat(b) + parseFloat(event.gesture.deltaY))

  };

  dragGesture = $ionicGesture.on('drag', onDrag, dragElement);
  release = $ionicGesture.on('release', onRelease, dragElement);

  $scope.$on('$destroy', function () {
    $ionicGesture.off(dragGesture, 'drag', onDrag);
    $ionicGesture.off(release, 'release', onRelease);
  });
});


// controller end //
