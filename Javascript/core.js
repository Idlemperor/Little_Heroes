var paused = 0;
var year = 1;
var month = 1;
var week = 1;
var day = 1;
var season = "Spring";

var freeWorkers = 0;
var totalWorkers = 0;
var lumberjacks = 0;
var miners = 0;

var goldAmount = 100;
var woodAmount = 0;
var stoneAmount = 0;

var stoneDaggers = 0;

function writeEvent(event)
{
	var oldEvent1 = document.getElementById('event1').innerHTML;
	var oldEvent2 = document.getElementById('event2').innerHTML;
	var oldEvent3 = document.getElementById('event3').innerHTML;
	var oldEvent4 = document.getElementById('event4').innerHTML;
	var oldEvent5 = document.getElementById('event5').innerHTML;
	var oldEvent6 = document.getElementById('event6').innerHTML;
	var oldEvent7 = document.getElementById('event7').innerHTML;
	var oldEvent8 = document.getElementById('event8').innerHTML;
	var oldEvent9 = document.getElementById('event9').innerHTML;
	var oldEvent10 = document.getElementById('event10').innerHTML;
	var oldEvent11 = document.getElementById('event11').innerHTML;
	var oldEvent12 = document.getElementById('event12').innerHTML;
	var oldEvent13 = document.getElementById('event13').innerHTML;
	var oldEvent14 = document.getElementById('event14').innerHTML;
	var oldEvent15 = document.getElementById('event15').innerHTML;
	var oldEvent16 = document.getElementById('event16').innerHTML;
	var oldEvent17 = document.getElementById('event17').innerHTML;
	var oldEvent18 = document.getElementById('event18').innerHTML;
	var oldEvent19 = document.getElementById('event19').innerHTML;
	var oldEvent20 = document.getElementById('event20').innerHTML;
	var oldEvent21 = document.getElementById('event21').innerHTML;

	document.getElementById('event1').innerHTML = event;
	document.getElementById('event2').innerHTML = oldEvent1;
	document.getElementById('event3').innerHTML = oldEvent2;
	document.getElementById('event4').innerHTML = oldEvent3;
	document.getElementById('event5').innerHTML = oldEvent4;
	document.getElementById('event6').innerHTML = oldEvent5;
	document.getElementById('event7').innerHTML = oldEvent6;
	document.getElementById('event8').innerHTML = oldEvent7;
	document.getElementById('event9').innerHTML = oldEvent8;
	document.getElementById('event10').innerHTML = oldEvent9;
	document.getElementById('event11').innerHTML = oldEvent10;
	document.getElementById('event12').innerHTML = oldEvent11;
	document.getElementById('event13').innerHTML = oldEvent12;
	document.getElementById('event14').innerHTML = oldEvent13;
	document.getElementById('event15').innerHTML = oldEvent14;
	document.getElementById('event16').innerHTML = oldEvent15;
	document.getElementById('event17').innerHTML = oldEvent16;
	document.getElementById('event18').innerHTML = oldEvent17;
	document.getElementById('event19').innerHTML = oldEvent18;
	document.getElementById('event20').innerHTML = oldEvent19;
	document.getElementById('event21').innerHTML = oldEvent20;
	document.getElementById('event22').innerHTML = oldEvent21;
};

function clearEvents()
{
	var newEvent = "";
	
	document.getElementById('event1').innerHTML = newEvent;
	document.getElementById('event2').innerHTML = newEvent;
	document.getElementById('event3').innerHTML = newEvent;
	document.getElementById('event4').innerHTML = newEvent;
	document.getElementById('event5').innerHTML = newEvent;
	document.getElementById('event6').innerHTML = newEvent;
	document.getElementById('event7').innerHTML = newEvent;
	document.getElementById('event8').innerHTML = newEvent;
	document.getElementById('event9').innerHTML = newEvent;
	document.getElementById('event10').innerHTML = newEvent;
	document.getElementById('event11').innerHTML = newEvent;
	document.getElementById('event12').innerHTML = newEvent;
	document.getElementById('event13').innerHTML = newEvent;
	document.getElementById('event14').innerHTML = newEvent;
	document.getElementById('event15').innerHTML = newEvent;
	document.getElementById('event16').innerHTML = newEvent;
	document.getElementById('event17').innerHTML = newEvent;
	document.getElementById('event18').innerHTML = newEvent;
	document.getElementById('event19').innerHTML = newEvent;
	document.getElementById('event20').innerHTML = newEvent;
	document.getElementById('event21').innerHTML = newEvent;
	document.getElementById('event22').innerHTML = newEvent;
};

function gatherResources()
{
	var woodPer = lumberjacks;
	var stonePer = miners;
	
	woodAmount = woodAmount + woodPer;
	stoneAmount = stoneAmount + stonePer;
	
	document.getElementById('wood').innerHTML = woodAmount;
	document.getElementById('woodPer').innerHTML = woodPer;
	document.getElementById('stone').innerHTML = stoneAmount;
	document.getElementById('stonePer').innerHTML = stonePer;
}

function advanceTime()
{
	if (paused == 0)
	{
		day = day + 1;
	
		if (day > 7)
		{
			day = 1;
			week = week + 1;
		
			if (week > 4)
			{
				week = 1;
				month = month + 1;
			
				if (month > 12)
				{
					month = 1;
					year = year + 1;
				};
			};
		};
	};
	
	if (month >= 1)
	{
		season = "Spring";
		
		if (month >=4)
		{
			season = "Summer";
			
			if (month >= 7)
			{
				season = "Fall";
				
				if (month >= 10)
				{
					season = "Winter";
				};
			};
		};
	};
	
	document.getElementById('year').innerHTML = year;
	document.getElementById('month').innerHTML = month;
	document.getElementById('week').innerHTML = week;
	document.getElementById('day').innerHTML = day;
	document.getElementById('season').innerHTML = season;
};

function save()
{
	var save = 
	{
		year: year,
		month: month,
		week: week,
		day: day,
		season: season
	}
	
	writeEvent("Game Saved.");
	localStorage.setItem("save",JSON.stringify(save)); 
};

function load()
{
	var save = JSON.parse(localStorage.getItem("save"));
	
	if (typeof save.year !== "undefined") document.getElementById("year").innerHTML = save.year;
	if (typeof save.month !== "undefined") document.getElementById("month").innerHTML = save.month;
	if (typeof save.week !== "undefined") document.getElementById("week").innerHTML = save.week;
	if (typeof save.day !== "undefined") document.getElementById("day").innerHTML = save.day;
	if (typeof save.season !== "undefined") document.getElementById("season").innerHTML = save.season;
};

function deleteSave()
{
	localStorage.removeItem("save");
};

window.setInterval(function() //Game loop that runs every 1.5 seconds.
{
	gatherResources();
}, 1500); 

window.setInterval(function() //Game loop that runs every 3 seconds.
{
	advanceTime();
}, 3000); 

window.setInterval(function() //Game loop that runs every minute.
{
	save();
}, 60000); 