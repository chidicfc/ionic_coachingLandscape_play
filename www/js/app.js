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

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    // default route
   $urlRouterProvider.otherwise('/home');

})

.service('buildingBlocksService', function() {
  this.buildingBlocks = [
        {
            "ID" : "hexagon1",
            "name" : "Investigating",
            "description" : "I seek alternatives",
            "class" : "hex think level1"
        },
        {
            "ID" : "hexagon2",
            "name" : "Data Gatherer",
            "description" : "Analysis unlocks meaning",
            "class" : "hex think level1"
        },
        {
            "ID" : "hexagon3",
            "name" : "Wise judgement",
            "description" : "After balanced consideration, I decide",
            "class" : "hex think level1"
        },
        {
            "ID" : "hexagon4",
            "name" : "Thinking more broadly",
            "description" : "I don't need to be an expert to lead",
            "class" : "hex think level2"
        },
        {
            "ID" : "hexagon5",
            "name" : "Innovator",
            "description" : "Failure is the key to success",
            "class" : "hex think level2"
        },
        {
            "ID" : "hexagon6",
            "name" : "Personal Purpose",
            "description" : "I know why I'm here",
            "class" : "hex inspire level2"
        },
        {
            "ID" : "hexagon7",
            "name" : "Knowing what I stand for",
            "description" : "I know what is important to me",
            "class" : "hex inspire level1"
        },
        {
            "ID" : "hexagon8",
            "name" : "Visioning",
            "description" : "I know where I am going",
            "class" : "hex inspire level1"
        },
        {
            "ID" : "hexagon9",
            "name" : "Co-creation and collaboration",
            "description" : "I am willing to let go and trust",
            "class" : "hex relate level2"
        },
        {
            "ID" : "hexagon10",
            "name" : "Tree climbing",
            "description" : "I need to see the big picture",
            "class" : "hex think level1"
        },
        {
            "ID" : "hexagon11",
            "name" : "Action orientation",
            "description" : "I get on and make things happen",
            "class" : "hex think level1"
        },
        {
            "ID" : "hexagon12",
            "name" : "Inquisitiveness",
            "description" : "What's beyond the obvious?",
            "class" : "hex think level2"
        },
        {
            "ID" : "hexagon13",
            "name" : "Insight creator",
            "description" : "I can find the pattern",
            "class" : "hex think level2"
        },
        {
            "ID" : "hexagon14",
            "name" : "Creating meaning",
            "description" : "I lead through purpose",
            "class" : "hex inspire level2"
        },
        {
            "ID" : "hexagon15",
            "name" : "Leading transformation",
            "description" : "Holding the dream and flexing the response",
            "class" : "hex inspire level2"
        },
        {
            "ID" : "hexagon16",
            "name" : "Leading in uncertainty",
            "description" : "If it's not me then who",
            "class" : "hex inspire level1"
        },
        {
            "ID" : "hexagon17",
            "name" : "Telling moving stories",
            "description" : "Vulnerability inspires",
            "class" : "hex relate level2"
        },
        {
            "ID" : "hexagon18",
            "name" : "Creating a shift in others",
            "description" : "I hold the tension for others to grow",
            "class" : "hex relate level2"
        },
        {
            "ID" : "hexagon19",
            "name" : "Championing Feedback",
            "description" : "It's something we both want",
            "class" : "hex relate level1"
        },
        {
            "ID" : "hexagon20",
            "name" : "Mastering the difficult message",
            "description" : "I'm OK, you're OK",
            "class" : "hex relate level1"
        },
        {
            "ID" : "hexagon21",
            "name" : "A flexible approach",
            "description" : "Different people need different approaches",
            "class" : "hex relate level1"
        },
        {
            "ID" : "hexagon22",
            "name" : "Finding my power",
            "description" : "I can claim my authority",
            "class" : "hex be level1"
        },
        {
            "ID" : "hexagon23",
            "name" : "Overcoming limiting beliefs",
            "description" : "Old patterns become new strength",
            "class" : "hex be level1"
        },
        {
            "ID" : "hexagon24",
            "name" : "Owning my impact",
            "description" : "I can be myself ... and shape who I am",
            "class" : "hex be level2"
        },
        {
            "ID" : "hexagon25",
            "name" : "Empathy and connection",
            "description" : "I want to be close to you",
            "class" : "hex relate level2"
        },
        {
            "ID" : "hexagon26",
            "name" : "Comfort with conflict",
            "description" : "Challenge leads to deeper trust",
            "class" : "hex relate level2"
        },
        {
            "ID" : "hexagon27",
            "name" : "Stepping into another's shoes",
            "description" : "I can experience other's worlds",
            "class" : "hex relate level1"
        },
        {
            "ID" : "hexagon28",
            "name" : "Committed listening",
            "description" : "I'm here with you",
            "class" : "hex relate level1"
        },
        {
            "ID" : "hexagon29",
            "name" : "Making people feel seen",
            "description" : "You matter, we matter, it matters",
            "class" : "hex relate level1"
        },
        {
            "ID" : "hexagon30",
            "name" : "Emotionally in touch",
            "description" : "My feelings and emotions are helpful",
            "class" : "hex be level1"
        },
        {
            "ID" : "hexagon31",
            "name" : "Choose your attitude",
            "description" : "I can choose my response",
            "class" : "hex be level1"
        },
        {
            "ID" : "hexagon32",
            "name" : "Presence and impact",
            "description" : "I'm proud of and project a powerful personality",
            "class" : "hex be level2"
        },
        {
            "ID" : "hexagon33",
            "name" : "Breaking unhelpful patterns",
            "description" : "I can change",
            "class" : "hex be level2"
        }
    ]

    this.coachingLandscape = [
      {
          "ID" : "landscape1",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      },
      {
          "ID" : "landscape2",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      },
      {
          "ID" : "landscape3",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      },
      {
          "ID" : "landscape4",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      },
      {
          "ID" : "landscape5",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      },
      {
          "ID" : "landscape6",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      },
      {
          "ID" : "landscape7",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      },
      {
          "ID" : "landscape8",
          "name" : "",
          "description" : "",
          "class" : "hex",
          "buildingBlockID" : "",
          "empty" : true
      }
    ]
})

.service('getEmptyLandscape', function() {

})

.controller('HomeCtrl', ["$scope", "$ionicGesture", "buildingBlocksService", function ($scope, $ionicGesture, buildingBlocksService) {
  var dragElement, element;

  var checkLandscape = function (landscape) {
      return landscape.empty == true;
  }

  var getEmptyCoachingLandscape = function (coachingLandscape) {
       return coachingLandscape.filter(checkLandscape);
  }

  $scope.onTouch = function (event, buildingBlock) {
    console.log("touching");
    element = document.querySelector("#" + buildingBlock.ID)
    dragElement = angular.element(element);
    console.log("css");
    console.log(event.gesture.deltaX != 0)
    console.log("class:" + buildingBlock.class);
    if (!(buildingBlock.class.includes("hex1"))){
      buildingBlock.class = buildingBlock.class.replace("hex", "hex1");
    }
  };

  $scope.onDrag = function (event, buildingBlock) {
    console.log("dragging");
    dragElement.css({ "transform": "translate(" + event.gesture.deltaX + "px, " + event.gesture.deltaY + "px)",
                      "-webkit-transform": "translate(" + event.gesture.deltaX + "px, " + event.gesture.deltaY + "px)" });
  };

  $scope.onRelease = function (event, buildingBlock) {
    console.log("releasing");
    if(event.gesture.deltaX != 0){
      dragElement.css({ "transform": "translate(0)" });
      buildingBlock.class = buildingBlock.class.replace("hex1", "hex");
      console.log(buildingBlock)
      console.log("setting landscape")
      var firstEmptyLandscape = getEmptyCoachingLandscape($scope.coachingLandscape)[0]
      console.log(firstEmptyLandscape)
      firstEmptyLandscape.name = buildingBlock.name
      firstEmptyLandscape.description = buildingBlock.description
      firstEmptyLandscape.class = buildingBlock.class
      firstEmptyLandscape.buildingBlockID = buildingBlock.ID
      firstEmptyLandscape.empty = false
    }
  };

  $scope.$on('$destroy', function () {
    $ionicGesture.off('touch', onTouch);
    $ionicGesture.off('drag', onDrag);
    $ionicGesture.off('release', onRelease);
  });

  $scope.buildingBlocks = buildingBlocksService.buildingBlocks

  $scope.coachingLandscape = buildingBlocksService.coachingLandscape

}]);
