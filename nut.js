// Defining variables
var date = new Date(); // Sets a variable for the date
var month = date.getMonth(); // Gets the current month from var date as a number 0-11
var year = date.getFullYear(); // Gets the current year form var date
var day = date.getDate(); // Gets the current day from var date in a number 1-31
var weekday = date.getDay(); // Gets the current weekday from var date in a number 0-6
var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // Setting an array to translate the month to a word, and not a number
var weekdayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // Same array concept for day of the week instead of month
var monthV = monthArr[month]; // Using the array to translate the month (var month) to a word (var monthV)
var weekdayV = weekdayArr[weekday]; // Same concept as above

// Checking if the current month according to the system clock on the viewers device, is November
if (month == 10) {
	document.body.style.backgroundColor = "#e85c3e";
	var cDD = new Date("December 1, " + year + " 00:00:00").getTime();
	noNutNovember();
} else {
	document.body.style.backgroundColor = "#5fa052";
	var cDD = new Date("November 1, " + year + " 00:00:00").getTime();
	noNutNovember();
}

// Function that runs after if it has been determined whether it is November or not
function noNutNovember() {
	if (month == 10) {
		document.getElementById("message").innerHTML = "It's officially No Nut November!";
		document.getElementById("3").innerHTML = "Days left until December 1st:";
	} else {
	  document.getElementById("message").innerHTML = "It is not currently No Nut November";
	  document.getElementById("3").innerHTML = "Days left until November 1st:";
	}
	document.getElementById("date").innerHTML = "The current date is " + weekdayV + ", " + monthV + " " + day + ", " + year;
	var x = setInterval(function() { // Translating var now from a number (in seconds since Jan 1, 1970) to days, hours, minutes, and seconds
	var now = new Date().getTime();
	var difference = cDD - now;
	var days = Math.floor(difference / (1000 * 60 * 60 * 24));
	var hours = Math.floor ((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	var sec = Math.floor((difference % (1000 * 60)) / 1000);
	if (days == 1) {
	  var dayM = " day, ";
	} else {
	  var dayM = " days, ";
	}
		if (hours == 1) {
	  var hourM = " hour, ";
	} else {
	  var hourM = " hours, ";
	}
		if (min == 1) {
	  var minM = " minute, and ";
	} else {
	  var minM = " minutes, and ";
	}
		if (sec == 1) {
	  var secM = " second";
	} else {
	  var secM = " seconds";
	}
	document.getElementById("cd").innerHTML = days + dayM + hours + hourM + min + minM + sec + secM; // Putting all variables together in a sick countdown in Comic Sans
}, 1000);
}
