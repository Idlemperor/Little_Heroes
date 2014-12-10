function craft(item)
{
	if (item == "stoneDagger")
	{
		if (stoneAmount >= 5)
		{
			if (woodAmount >= 5)
			{
				woodAmount = woodAmount - 5;
				stoneAmount = stoneAmount - 5;
				stoneDaggers = stoneDaggers + 1;
				
				document.getElementById("wood").innerHTML = woodAmount;
				document.getElementById("stone").innerHTML = stoneAmount;
				document.getElementById("stoneDaggers").innerHTML = stoneDaggers;
			};
		};
	};
};