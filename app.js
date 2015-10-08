

var CookieStand = function(place,minCustHour,maxCustHour,avgCookiesCust,id) {
	
  this.place = place; 
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.id = id;
  this.cookiesPerHour = [];
  this.openHours = ["10am","11am","12pm","1pm","2pm","3pm", "4pm","5pm"];
  


  this.randCustHour = function() {
    return Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour;
    };

  this.avgCookiesHour = function() {
  return Math.floor(this.randCustHour() * this.avgCookiesCust);
  };

  this.totalDailyCookies = function() {
    this.dailyTotals = 0;
    for (var i = 0; i < this.openHours.length; i++) {
      this.cookiesPerHour.push(this.avgCookiesHour());
      this.dailyTotals = this.dailyTotals + this.cookiesPerHour[i];
    };

    return this.dailyTotals;
  };

 this.makeUL = function(id) {

    for(var i = 0; i < this.openHours.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var storeList = document.getElementById(this.id);
        
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(this.openHours[i] + ': ' + this.avgCookiesHour() ));

        // Add it to the list:
        storeList.appendChild(item);
        }

  };
        this.makeUL(this.id);	
 
} 

var pikePlace = new CookieStand('pike place market', 17,88,5.2, 'pike');
var seatac = new CookieStand('seatac',6, 44, 1.2, 'seatac');
var southCenter = new CookieStand('southCenter',11, 38, 1.9, 'southCenter');
var bellevueSquare = new CookieStand('bellevueSquare', 20, 48, 3.3, 'bSquare');
var alkiBeach = new CookieStand('alkiBeach', 3, 24, 2.6, 'alki');



