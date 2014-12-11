/*
	This File Contains Functions For Handling The Game Loops And Variables
	
	Searching Index:
		Global Variables - v1
			Time Related Variables - v2
			Job Related Variables - v3
			Resource Related Variables - v4
			Item Related Variables - v5
		------------------------------------------
		Save Game Function - f1
		Load Game Function - f2
		Delete Game Function - f3
		Time Advancement Function - f4
		Event Writer Function - f5
		Gather Resources Function - f6
		------------------------------------------
		Game Loops - g1
			1.5 Second Loop - g2
			3.0 Second Loop - g3
			2.0 Minute Loop - g4
*/

// v1
// The Sections Below Contain ALL Of The Global Variables

// v2
// This Section Contains Variables Relating To The Game Time
var paused = 0; // Whether The Game Is Currently Paused Or Not (0 Is Not Paused, 1 Is Paused)
var year = 1; // The Current In Game Year
var month = 1; // The Current In Game Month
var week = 1; // The Current In Game Week
var day = 1; // The Current In Game Day
var season = "Spring"; // The Current In Game Season (Spring, Summer, Fall, Winter)

// v3
// This Section Contains Variables Relating To Jobs
var freeWorkers = 0; // Number Of Workers Available For Assignment
var totalWorkers = 0; // Total Number Of Workers Across All Job Assignments
var lumberjacks = 0; // Number Of Workers Assigned As Lumberjacks
var miners = 0; // Number Of Workers Assigned As Miners

// v4
// This Section Contains Variables Relating To Resources
var goldAmount = 50; // Number Of Gold The Player Has
var woodAmount = 0; // Number Of Wood The Player Has
var stoneAmount = 0; // Number Of Stone The Player Has

// v5
// This Section Contains Variables Relating To Items
var stoneDaggers = 0; // Number Of Stone Daggers The Player Has
var stoneDaggerUpgrade = "Sharper Blade"; //Next Upgrade For Stone Dagger
var stoneDaggerValue = 2; //Current Value Of A Stone Dagger In Gold

// f1
// This Function Handles Saving The Game
// It Creates An Object Containing All Of The Current Global Variables
// Then Saves The Object To Local Storage
function saveGame()
{
	var save = // Creates An Object That Is Used To Store ALL Global Variables
	{
		// Time Related Variables
		paused: paused,
		year: year,
		month: month,
		week: week,
		day: day,
		season: season,
		
		// Job Related Variables
		freeWorkers: freeWorkers,
		totalWorkers: totalWorkers,
		lumberjacks: lumberjacks,
		miners: miners,
		
		// Resource Related Variables
		goldAmount: goldAmount,
		woodAmount: woodAmount,
		stoneAmount: stoneAmount,
		
		// Item Related Variables
		stoneDaggers: stoneDaggers
	}
	
	writeEvent("Game Saved."); //Uses The Event Writing Function To Inform The Player 
							   //That The Game Was Saved
							   
	localStorage.setItem("LHsave",JSON.stringify(save)); //Saves The Object To Local Storage
};

//f2
// This Function Handles Loading The Game
// It Pulls An Object From Local Storage That Was Previously Created
// By The Save Function, Then Sets All Global Variables According To The Save Object
function loadGame()
{
	var save = JSON.parse(localStorage.getItem("LHsave")); // Pulls Object From Local Storage
	
	// Each Line Below Checks For A Global Variable. Then Overwrites Current Data With Saved Data
	// Time Related Variables
	if (typeof save.paused !== "undefined") paused = save.paused;
	if (typeof save.year !== "undefined") year = save.year;
	if (typeof save.month !== "undefined") month = save.month;
	if (typeof save.week !== "undefined") week = save.week;
	if (typeof save.day !== "undefined") day = save.day;
	if (typeof save.season !== "undefined") season = save.season;
	
	// Job Related Variables
	if (typeof save.freeWorkers !== "undefined") freeWorkers = save.freeWorkers;
	if (typeof save.totalWorkers !== "undefined") totalWorkers = save.totalWorkers;
	if (typeof save.lumberjacks !== "undefined") lumberjacks = save.lumberjacks;
	if (typeof save.miners !== "undefined") miners = save.miners;
	
	// Resource Related Variables
	if (typeof save.goldAmount !== "undefined") goldAmount = save.goldAmount;
	if (typeof save.woodAmount !== "undefined") woodAmount = save.woodAmount;
	if (typeof save.stoneAmount !== "undefined") stoneAmount = save.stoneAmount;
};

// f3
// This Function Handles Deleting The Saved Game
// It Removes Any Previously Saved Game From Local Storage
function deleteGame()
{
	localStorage.removeItem("LHsave"); // Deletes Save Object From Local Storage
};

// f4
// This Function Handles The Advancement Of Time
// It Tracks Time And Displays It On The User Interface
function advanceTime()
{
	if (paused == 0) // Checks That The Game Is Not Paused
	{
		day = day + 1; // Advances Day By One
	
		if (day > 7) // Checks If The Day Should Be Moved To Next Week
		{
			day = 1; // Sets Day To First Of The Week
			week = week + 1; // Advances Week By One
		
			if (week > 4) // Checks If The Week Should Be Moved To Next Month
			{
				week = 1; // Sets Week To First Of The Month
				month = month + 1; // Advances Month By One
			
				if (month > 12) // Checks If The Month Should Be Moved To Next Yet
				{
					month = 1; // Sets Month To First Of The Year
					year = year + 1; // Advances Year By One
				};
			};
		};
	};
	
	// Code Below Determines Which Season It Is
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
	
	//Everything Below Here Writes The Changes Made Above To The User Interface
	document.getElementById('year').innerHTML = year;
	document.getElementById('month').innerHTML = month;
	document.getElementById('week').innerHTML = week;
	document.getElementById('day').innerHTML = day;
	document.getElementById('season').innerHTML = season;
	//Everything Above Here Writes The Changes Made Above To The User Interface	
};

// f5
// This Function Handles Writing Events To The Event Log
// It Takes An Event As Input And Adds It To The Log
function writeEvent(event)
{
	// Code Below Creates Variables Of Current Events
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
	
	// Code Below Writes New Event At The Top And Moves All Old Events Down 1 Row
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

// f6
// This Function Handles The Gathering Of Resources By Workers
// Calculated How Many Resources Will Be Gained And Adds Them To The Total
function gatherResources()
{
	var woodPer = lumberjacks * 0.5; // Calculates How Much Wood Will Be Gathered
	var stonePer = miners * 0.5; // Calculates How Much Stone Will Be Gathered
	
	woodAmount = woodAmount + woodPer; // Adds To The Total Wood Amount
	stoneAmount = stoneAmount + stonePer; // Adds To The Total Stone Amount
	
	//Everything Below Here Writes The Changes Made Above To The User Interface
	document.getElementById('woodAmount').innerHTML = woodAmount;
	document.getElementById('woodPer').innerHTML = woodPer;
	document.getElementById('stoneAmount').innerHTML = stoneAmount;
	document.getElementById('stonePer').innerHTML = stonePer;
	//Everything Above Here Writes The Changes Made Above To The User Interface	
};

// g1
// The Sections Below Are Game Loops That Run At Different Intervals

// g2
// This Loop Executes Commands Every 1.5 Seconds
window.setInterval(function()
{
	gatherResources(); // Executes The Function To Gather Resources
}, 1500); 

// g3
// This Loop Executes Commands Every 3 Seconds
window.setInterval(function()
{
	advanceTime(); // Executes The Function To Advance Time
}, 3000); 

// g4
// This Loop Executes Commands Every 2 Minutes
// Mostly Just Used As An AutoSave Feature
window.setInterval(function()
{
	saveGame(); // Executes The Function To Save The Game
}, 120000); 
















