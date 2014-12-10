function hire(job)
{
	if (job == "worker")
	{
		if (goldAmount >= 10)
		{
			goldAmount = goldAmount - 10;
			freeWorkers = freeWorkers + 1;
			totalWorkers = totalWorkers + 1;
			
			document.getElementById("gold").innerHTML = goldAmount;
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("totalWorkers").innerHTML = totalWorkers;
		}
	};
	
	if (job == "lumberjack")
	{
		if (freeWorkers >= 1)
		{
			freeWorkers = freeWorkers - 1;
			lumberjacks = lumberjacks + 1;
			
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("lumberjacks").innerHTML = lumberjacks;
		}
	};
	
	if (job == "miner")
	{
		if (freeWorkers >= 1)
		{
			freeWorkers = freeWorkers - 1;
			miners = miners + 1;
			
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("miners").innerHTML = miners;
		}
	};
};

function fire(job)
{
	if (job == "lumberjack")
	{
		if (lumberjacks >= 1)
		{
			freeWorkers = freeWorkers + 1;
			lumberjacks = lumberjacks - 1;
			
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("lumberjacks").innerHTML = lumberjacks;
		}
	};
	
	if (job == "miner")
	{
		if (miners >= 1)
		{
			freeWorkers = freeWorkers + 1;
			miners = miners - 1;
			
			document.getElementById("freeWorkers").innerHTML = freeWorkers;
			document.getElementById("miners").innerHTML = miners;
		}
	};
};