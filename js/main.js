var weeks = {
	"week-2" : new Date(2013, 9, 0),
	"week-3" : new Date(2013, 9, 0),
	"week-4and5": new Date(2013, 9, 0),
	"week-6" : new Date(2013, 9, 0),
	"week-7" : new Date(2013, 9, 23),
	"week-8" : new Date(2013, 9, 16),
	"week-9" : new Date(2013, 9, 30),
	"week-10": new Date(2013, 10, 6),
	"week-11": new Date(2013, 10, 13),
	"week-12": new Date(2013, 10, 20),
	"week-13": new Date(2013, 10, 27),
	"week-14": new Date(2013, 11, 4),
	"week-15": new Date(2013, 11, 11)
};

window.onload=function(){
	var elements = document.getElementsByClassName("week");

	var now = new Date();

	for (i=0;i<elements.length;i++) {
		var el = elements[i];
		
		var dateAvailable = weeks[el.id];

		if (dateAvailable > now) {

			el.style.display = 'none';

		}
	}
};