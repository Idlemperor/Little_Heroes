/*
	This File Contains Functions For Handling The Hiring And Assigning Of Workers
	
	Searching Index:
		Core Hiring Function - f1
		Core Firing Function - f2
*/

// f1
// This Is The Core Hiring Function. It Takes A Job Name As Input
// Checks That The Player Has Available Workers, Then Assigns One To The Job
// This Function Is Also Used To Hire New Workers
function hire(job)
{
	if (job == "worker") // Checks To See If Input Job Was A Worker
	{
		if (goldAmount >= 10) // Checks That The Player Has Enough Gold To Hire A Worker
		{
			goldAmount = goldAmount - 10; // Removes Gold Cost From Gold Amount
			freeWorkers = freeWorkers + 1; // Adds A New Available Worker
			totalWorkers = totalWorkers + 1; // Adds To The Total Worker Count
			
			//Everything Below Here Writes The Changes Made Above To The User Interface
			document.getElementById("goldAmount").innerHTML = goldAmount;
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("totalWorkers").innerHTML = totalWorkers;
			//Everything Above Here Writes The Changes Made Above To The User Interface
		};
	};
	
	if (job == "lumberjack") // Checks To See If Input Job Was A Lumberjack
	{
		if (freeWorkers >= 1) // Checks That The Player Has A Free Worker
		{
			freeWorkers = freeWorkers - 1; // Removes A Worker From The Available Pool
			lumberjacks = lumberjacks + 1; // Adds The Worker To The Lumberjack Pool
			
			//Everything Below Here Writes The Changes Made Above To The User Interface
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("lumberjacks").innerHTML = lumberjacks;
			//Everything Above Here Writes The Changes Made Above To The User Interface
		};
	};
	
	if (job == "miner") // Checks To See If Input Job Was A Miner
	{
		if (freeWorkers >= 1) // Checks That The Player Has A Free Worker
		{
			freeWorkers = freeWorkers - 1; // Removes A Worker From The Available Pool
			miners = miners + 1; // Adds The Worker To The Miner Pool
			
			//Everything Below Here Writes The Changes Made Above To The User Interface
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("miners").innerHTML = miners;
			//Everything Above Here Writes The Changes Made Above To The User Interface
		};
	};
};

// f2
// This Is The Core Firing Function. It Takes A Job Name As Input
// Checks That The Player Has Workers Doing That Job, Then Removes A Worker From That Job
function fire(job)
{
	if (job == "lumberjack") // Checks To See If Input Job Was A Lumberjack
	{
		if (lumberjacks >= 1) // Checks That The Player Has Lumberjacks
		{
			freeWorkers = freeWorkers + 1; // Adds A Worker To The Available Pool
			lumberjacks = lumberjacks - 1; // Removes A Worker From The Lumberjack Pool
			
			//Everything Below Here Writes The Changes Made Above To The User Interface
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("lumberjacks").innerHTML = lumberjacks;
			//Everything Above Here Writes The Changes Made Above To The User Interface
		};
	};
	
	if (job == "miner") // Checks To See If Input Job Was A Miner
	{
		if (miners >= 1) // Checks That The Player Has Miners
		{
			freeWorkers = freeWorkers + 1; // Adds A Worker To The Available Pool
			miners = miners - 1; // Removes A Worker From The Miner Pool
			
			//Everything Below Here Writes The Changes Made Above To The User Interface
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("miners").innerHTML = miners;
			//Everything Above Here Writes The Changes Made Above To The User Interface
		};
	};
};