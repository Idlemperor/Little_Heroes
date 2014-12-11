/*
	This File Contains Functions For Handling Crafting
	
	Searching Index:
		Core Crafting Function - f1
*/

// f1
// This Is The Core Crafting Function. It Takes An Item Name As Input
// Checks If The Player Has The Required Resources, And Then Creates It
function craft(item)
{
	if (item == "stoneDagger") // Checks To See If Input Item Was Stone Dagger
	{
		if (stoneAmount >= 5) // Checks To See If The Player Has Required Stone Amount
		{
			if (woodAmount >= 5) // Checks To See If The Player Has Required Wood Amount
			{
				woodAmount = woodAmount - 5; // Removes Wood Cost From Players Wood Amount
				stoneAmount = stoneAmount - 5; // Removes Stone Cost From Players Stone Amount
				stoneDaggers = stoneDaggers + 1; // Adds A Stone Dagger To The Inventory
				
				//Everything Below Here Writes The Changes Made Above To The User Interface
				document.getElementById("woodAmount").innerHTML = woodAmount;
				document.getElementById("stoneAmount").innerHTML = stoneAmount;
				document.getElementById("stoneDaggers").innerHTML = stoneDaggers;
				//Everything Above Here Writes The Changes Made Above To The User Interface				
			};
		};
	};
};