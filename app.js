var pikePlace = {
  location: 'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesPerDay: 0,

  randCustHour: function() {
    return Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour;
    
  },
  avgCookiesHour: function() {
  var cookies = Math.floor(this.randCustHour() * this.avgCookiesCust);
  this.cookiesPerDay += cookies;
  	return cookies;
  }

 
  // totalCookiesHour = [];
  //makeUL = function....	
}

// console.log(pikePlace.randCustHour());
// console.log(pikePlace.avgCookiesHour());
// // min
// max
// random

// random * cookies er customer = cookies per hour

function makeUL(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var awesomeList = document.getElementById('pike');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        awesomeList.appendChild(item);
    }

    // Finally, return the constructed list:
    return awesomeList;
}

var stuff = ['10am ' + pikePlace.avgCookiesHour(),'11am ' + pikePlace.avgCookiesHour(),'12pm ' + pikePlace.avgCookiesHour(),'1pm ' + pikePlace.avgCookiesHour(),'2pm ' + pikePlace.avgCookiesHour(),'3pm ' + pikePlace.avgCookiesHour(),'4pm ' + pikePlace.avgCookiesHour(),'5pm ' + pikePlace.avgCookiesHour(), 'total ' + pikePlace.cookiesPerDay];

makeUL(stuff);
