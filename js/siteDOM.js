// Angular Module 
// SITE-DIRECTIVES
// Expands the DOM to include concept-past, concept-present, concept-future and concept-tabs tags

// Angular Module Namespace Declaration
// [] implies that this module has no dependencies 
var app = angular.module('site-directives', []);


(function() {
  // -------------------------------------------
  // Directive: conceptPast
  // Type : DOM Element
  app.directive("conceptPast", function() {
    return {
      restrict: 'E',
      templateUrl: "past.html"
    }; // End Return
  }); //End Directive

  // -------------------------------------------
  // Directive: conceptFuture
  // Type : DOM Element
  app.directive("conceptFuture", function() {
    return {
      restrict: 'E',
      templateUrl: "future.html"
    }; // End Return
  }); //End Directive

  // -------------------------------------------
  // Directive: conceptPresent
  // Type : DOM Attribute
  app.directive("conceptPresent", function() {
    return {
      restrict:"A",
      templateUrl: "present.html"
    }; // End Return
  }); //End Directive

  // -------------------------------------------
  // Directive: conceptTabs
  // Type : DOM Element
  app.directive("conceptTabs", function() {
    return {
      restrict: "E",
      templateUrl: "concept-tabs.html",
      controller: function() {
        	this.tab = 2;

        	this.isSet = function(checkTab) {
          		return this.tab === checkTab;
        	}; // END isSet

        	this.setTab = function(activeTab) {
          		this.tab = activeTab;

          		if(this.tab == 3){ 
          			var sFrameName =  '#inlineFuture' +  $('nav').attr('class');
  					if($(sFrameName).attr('src') == '') {
  						$(sFrameName).attr('src', 'jsmindmap/future' +  ($('nav').attr('class')).toLowerCase() + '.html');
  					} // End Inner IF
          		} // End Outer IF
    		}; //End Function setTab
     	}, // Controller declaration in JSON
      	controllerAs: "tab"
    	}; // End Return
 	 }); //End Directive
  // -------------------------------------------
})(); //End Anonymous function