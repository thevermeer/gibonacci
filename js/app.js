// Angular MAIN Module of the namespace vaSite
// vaSite
// Expands the DOM to include concept-past, concept-present, concept-future and concept-tabs tags

// Angular Module Namespace Declaration
// ['site-directives'] injects dependency for definition from siteDOM.js, included in index.html 
(function() {
  var app = angular.module('vaSite', []);

  	

	app.filter('int', function() {
    	return function(input) {
      		return parseInt(input, 10);
    	}
	});


	//Root controller for the site/application
   app.controller('vaSiteController', function(){
   	
   	this.arrValues = [];
   	this.a = 0;
   	this.b = 1;
   	this.lastClass = "";
   	this.functionString = "";
   	this.valueString = "";
   	this.activeP = 0;
   	this.activeN = 0;
   	this.factorials = [];

   	this.createArray = function(){
   		this.arrValues = new Array(50);
  		for (var i = 0; i < 50; i++) {
    		this.arrValues[i] = new Array(50);
  		}
  
   	}();
   
   	this.power = function(base, exponent){
   		return Math.pow(base, exponent);
   	};
   	
   	
   	this.getRange = function(start, end){
   		var arr = [];
   		for(var i = start; i<=end; i++){
   			arr.push(i);
   		}
   		return arr;
   	};

   	

   	this.showCell = function(p,n){
   		var cellOrder = this.getOrder(p, n);
		
		var sign = -1;
		var sFunction = "";
		var sValue = "" + Math.pow(2, n-1);
		for(var i = 1; i<= cellOrder-1; i++){
			sFunction += sign > 0 ? ' + ':' - ';
			
			sFunction += "Chebyshev" + i;
			sValue += (sign > 0 ? ' + ':' - ') + this.chebyshev(n-((p+1)*i)+(i-1), i);
			
			sign *= -1;
		}
		this.functionString = "2^(n-1) " + sFunction;
		this.valueString = sValue + " = " + this.smartGib(p, n+1, 0, 1);
		this.activeP = p;
		this.activeN = n;
		
		if(cellOrder > ''){ $('#breakdown').removeClass(this.lastClass); }
		$('#breakdown').addClass('class'+cellOrder);
		this.lastClass = 'class'+cellOrder
   		
   	};
   	
   	this.getOrder = function(p, n){
   		if(n < p+1){ return 1; }
   		
   		else return parseInt(n/(p+1), 10)+1;

   	};



	this.factorial = (function(n) {
  		if (n == 0 || n == 1)
    		return 1;
  		if (this.factorials[n] > 0)
    		return this.factorials[n];
  		return this.factorials[n] = this.factorial(n-1) * n;
	}); 

	this.choose = (function(n,k){
		if (k>n) { return 0; }
		return this.factorial(n)/(this.factorial(k) * this.factorial(n-k));
	});

	this.negativeIfOdd = (function(n){
		if(n%2 == 0){ return 1; }
		return -1;
	});

	this.chebyshev = (function(n, k){
		var i = 0;
		var total = 0;
		for(i=0; i<=n; i++){
			//console.log([n, k, i]); 
			total += (this.negativeIfOdd(i) * this.choose(n, i) * this.choose((2*n)-(2*i)+1, n+k));
		}
		//return this.negativeIfOdd(2);;
		return total;
	});

	// smartGib 
	// Checks arrValues[p][n][a,b] and if the array contains value return it
	// If the array does not have a value, gibonacci is summoned recursively and interdependently  	
   	this.smartGib = function(p,n,a,b){
   		if(!arrValues[p][n] || arrValues[p][n][1] != a || arrValues[p][n][2] != b){
   			arrValues[p][n] = [this.gibonacci(p,n,a,b), a, b];
   		}
   		return arrValues[p][n][0];
   	};
   
    this.gibonacci=function(p, n, p0, p1){
    	var iReturn = 0;
    	if(n<0){ return 0; }
    	else if(n===0) { return p0 || 0; }
    	else if(n===1) { return p1 || 1; }
    	else { 
    		
    		for(var i=1;i<=p;i++){
    			iReturn = iReturn + this.smartGib(p, n-i, p0, p1);
			}
    		return iReturn;
    	}
    };
  }); //end vaSiteController


})();


