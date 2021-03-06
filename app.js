

var CookieStand = function(place,minCustHour,maxCustHour,avgCookiesCust,id) {
	
  this.place = place; 
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.id = id;
  this.cookiesPerHour = [];
  this.openHours = ["10am","11am","12pm","1pm","2pm","3pm", "4pm","5pm"];
  // this.placeName = [pikePlace, seatac, southCenter, bellevueSquare, alkiBeach];

   //calculate random customers per hour
  this.randCustHour = function() {
    return Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour;
    };
   //calculate average cookies per hour by store
  this.avgCookiesHour = function() {
  return Math.floor(this.randCustHour() * this.avgCookiesCust);
  };
   //Puts avgCookiesPerHour into this.cookiesPerHour array
  this.totalDailyCookies = function() {
    this.dailyTotals = 0;
    for (var i = 0; i < this.openHours.length; i++) {
      this.cookiesPerHour.push(this.avgCookiesHour());
      this.dailyTotals = this.dailyTotals + this.cookiesPerHour[i];
    };

    return this.dailyTotals;
  };

  this.totalDailyCookies();
  
    // var table = document.getElementById('table');
    // var placeName = [pikePlace, seatac, southCenter, bellevueSquare, alkiBeach];
   
    var tab = document.getElementById('table');
    // var placeName = ['Pike Place', 'Seatac', 'South Center', 'Bellevue Square', 'Alki Beach'];

    this.makeTable = function() {
      // console.log('hello from inside makeTable');
        
        var tr = document.createElement('tr');
        tr.textContent = this.place;
        tab.appendChild(tr);

        for (var j = 0; j < this.cookiesPerHour.length; j++) {
          
          var td = document.createElement('td');
          td.textContent = this.cookiesPerHour[j];
          tr.appendChild(td);
        }
        var td2 = document.createElement('td');
        td2.textContent = this.dailyTotals;
        tr.appendChild(td2);
      
    };
    this.makeTable();


    // var cookiesperHour = [];

 //    this.makeTable = function(placeName,cookiesperHour) {
 //      console.log('hello from inside makeTable')
 //      for (var i = 0; i < this.placeName.length; i++) {
 //        var tr = document.createElement('tr');
 //        tr.textContent = this.placeName[i];
 //        table.appendChild(tr);

 //        for (var j = 0; j < this.cookiesperHour.length; j++) {
 //          var td = document.createElement('td');
 //          td.textContent = this.cookiesperHour[j];
 //          tr.appendChild(td);
 //        }
 //        var td2 = document.createElement('td');
 //        td2.textContent = "beans";
 //        tr.appendChild(td2);
 //      }
      
 //    };
 //    this.makeTable(placeName,cookiesPerHour);
 // // this.makeUL = function(id) {

 //        // connect the list to the JS; this is where your list will appear
    // var storeList = document.getElementById(this.id);

    // for(var i = 0; i < this.openHours.length; i++) {
    //      // Create the list item:
    //     var item = document.createElement('li');

    //     // Set its contents:
    //     item.appendChild(document.createTextNode(this.openHours[i] + ': ' + this.avgCookiesHour() ));

    //     // Add it to the list:
    //     storeList.appendChild(item);
    //    }
    //    var li = document.createElement('li');
    //    li.textContent = 'total ' + this.totalDailyCookies();
    //    storeList.appendChild(li);

};

        // this.makeUL(this.id);	
 
// } 
//create instances of object here
var pikePlace = new CookieStand('pike place market', 17,88,5.2, 'pike');
var seatac = new CookieStand('seatac',6, 44, 1.2, 'seatac');
var southCenter = new CookieStand('southCenter',11, 38, 1.9, 'southCenter');
var bellevueSquare = new CookieStand('bellevueSquare', 20, 48, 3.3, 'bSquare');
var alkiBeach = new CookieStand('alkiBeach', 3, 24, 2.6, 'alki');



