/*
	This File Contains Functions For Handling Crafting
	*May Be Out Of Order, Index Will Eventually Be Updated And Organized*
	
	Searching Index:
		Core Crafting Function 	- f1
		Core Upgrading Function - f2
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
				
				writeEvent("Crafted A Stone Dagger.");
				//Everything Above Here Writes The Changes Made Above To The User Interface				
			};
		};
	};
};

// f2
// This Is The Core Upgrading Function. It Takes An Item Name As Input
// Checks If The Player Has Required Resources And Upgrades Item
function upgrade(item)
{
	if (item == "stoneDagger") // Checks To See If Input Item Was Stone Dagger
	{
		if (stoneDaggerUpgrade == "Sharper Blade") // Checks To See If The Next Upgrade Is Sharper Blade
		{
			if (stoneAmount >= 10) // Checks To See If The Player Has Required Stone Amount
			{
				stoneAmount = stoneAmount - 10; // Removes Stone Cost From Stone Amount
				stoneDaggerValue = 4; // Increase Value Of Stone Daggers
				stoneDaggerUpgrade = "Reinforced Handle"; // Move To Next Upgrade Tier
				
				//Everything Below Here Writes The Changes Made Above To The User Interface
				document.getElementById("stoneAmount").innerHTML = stoneAmount;
				document.getElementById("stoneDaggerValue").innerHTML = stoneDaggerValue;
				document.getElementById("stoneDaggerUpgrade").innerHTML = stoneDaggerUpgrade;
				document.getElementById("stoneDaggerUpgradeCost").innerHTML = " 20 Wood";
				
				writeEvent("Upgraded Stone Dagger Quality.")
				//Everything Above Here Writes The Changes Made Above To The User Interface
			};
		};
	};
};









