var paused = 0;
var year = 1;
var month = 1;
var week = 1;
var day = 1;
var season = "Spring";

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

window.setInterval(function() //Game loop that runs every 3 seconds.
{
	advanceTime();
}, 3000); 