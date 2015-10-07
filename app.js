

var CookieStand = function(place,minCustHour,maxCustHour,avgCookiesCust,id) {
	this.place = place;
   // location: 'Pike Place Market',
  // minCustHour: 17,
  this.minCustHour = minCustHour;
  // maxCustHour: 88,
  this.maxCustHour = maxCustHour;
  // avgCookiesCust: 5.2,
  this.avgCookiesCust = avgCookiesCust;
  this.id = id;
  



  // cookiesPerDay: 0,
  this.cookiesPerDay = 0;

  this.randCustHour = function() {
    return Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour;
    };

  this.avgCookiesHour = function() {
  var cookies = Math.floor(this.randCustHour() * this.avgCookiesCust);
  this.cookiesPerDay += cookies;
  	return cookies;
  };

  var stuff1 = ['10am ' + this.avgCookiesHour(),'11am ' + this.avgCookiesHour(),'12pm ' + this.avgCookiesHour(),'1pm ' + this.avgCookiesHour(),'2pm ' + this.avgCookiesHour(),'3pm ' + this.avgCookiesHour(),'4pm ' + this.avgCookiesHour(),'5pm ' + this.avgCookiesHour(), 'total ' + this.cookiesPerDay];

 this.makeUL = function(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var awesomeList = document.getElementById(this.id);
        
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        awesomeList.appendChild(item);


    }

    // Finally, return the constructed list:
    return awesomeList;

  };
  this.makeUL(stuff1);	
 
} 

var pikePlace = new CookieStand('pike place market', 17,88,5.2, 'pike');
var seatac = new CookieStand('seatac',6, 44, 1.2, 'seatac');
var southCenter = new CookieStand('southCenter',11, 38, 1.9, 'southCenter');
var bellevueSquare = new CookieStand('bellevueSquare', 20, 48, 3.3, 'bSquare');
var alkiBeach = new CookieStand('alkiBeach', 3, 24, 2.6, 'alki');



// function makeUL(array) {

//     for(var i = 0; i < array.length; i++) {

//         // connect the list to the JS; this is where your list will appear
//         var awesomeList = document.getElementById('id');
        
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(array[i]));

//         // Add it to the list:
//         awesomeList.appendChild(item);


//     }

//     // Finally, return the constructed list:
//     return awesomeList;
// }

// var stuff1 = ['10am ' + pikePlace.avgCookiesHour(),'11am ' + pikePlace.avgCookiesHour(),'12pm ' + pikePlace.avgCookiesHour(),'1pm ' + pikePlace.avgCookiesHour(),'2pm ' + pikePlace.avgCookiesHour(),'3pm ' + pikePlace.avgCookiesHour(),'4pm ' + pikePlace.avgCookiesHour(),'5pm ' + pikePlace.avgCookiesHour(), 'total ' + pikePlace.cookiesPerDay];


// makeUL(stuff1);

