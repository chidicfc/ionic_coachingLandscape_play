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
  var onDrag, onRelease, dragElement, dragGesture, release, x, y, element, style;

  element = document.querySelector(".hex")
  dragElement = angular.element(element);

  onDrag = function (event) {
    dragElement.css({ "transform": "translate(" + event.gesture.deltaX + "px, " + event.gesture.deltaY + "px)" });
  };

  onRelease = function (event) {
    dragElement.css({ "transform": "translate(0)" });
  };

  dragGesture = $ionicGesture.on('drag', onDrag, dragElement);
  release = $ionicGesture.on('release', onRelease, dragElement);

  $scope.$on('$destroy', function () {
    $ionicGesture.off(dragGesture, 'drag', onDrag);
    $ionicGesture.off(release, 'release', onRelease);
  });
});
// controller end //
