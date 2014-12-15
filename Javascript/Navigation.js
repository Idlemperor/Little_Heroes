/*
	This File Contains Functions For Handling Page Navigation
	*May Be Out Of Order, Index Will Eventually Be Updated And Organized*
	
	Searching Index:
		Core Display Function - f1
*/

// f1
// This Function Handles Displaying Different Windows In The Interface
// It Takes A Window Name As Input And Displays That For The User
function display(window)
{
	if (window == 'Workers') // Checks If Requested Window Is The Workers Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "inline";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
		document.getElementById('MarketWindow').style.display = "none";
		
		document.getElementById('WorkersTab').className = "SelectionTab-Selected";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
		document.getElementById('MarketTab').className = "SelectionTab";
		//Everything Above Here Makes Changes To The User Interface
	};
	
	if (window == 'Inventory') // Checks If Requested Window Is The Inventory Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "inline";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
		document.getElementById('MarketWindow').style.display = "none";
		
		document.getElementById('WorkersTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab-Selected";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
		document.getElementById('MarketTab').className = "SelectionTab";
		//Everything Above Here Makes Changes To The User Interface
	};
	
	if (window == 'Buildings') // Checks If Requested Window Is The Buildings Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "inline";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
		document.getElementById('MarketWindow').style.display = "none";
		
		document.getElementById('WorkersTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab-Selected";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
		document.getElementById('MarketTab').className = "SelectionTab";
		//Everything Above Here Makes Changes To The User Interface
	};
	
	if (window == 'Heroes') // Checks If Requested Window Is The Heroes Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "inline";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
		document.getElementById('MarketWindow').style.display = "none";
		
		document.getElementById('WorkersTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab-Selected";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
		document.getElementById('MarketTab').className = "SelectionTab";
		//Everything Above Here Makes Changes To The User Interface
	};
	
	if (window == 'Pets') // Checks If Requested Window Is The Pets Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "inline";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
		document.getElementById('MarketWindow').style.display = "none";
		
		document.getElementById('WorkersTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab-Selected";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
		document.getElementById('MarketTab').className = "SelectionTab";
		//Everything Above Here Makes Changes To The User Interface
	};
	
	if (window == 'Dungeon') // Checks If Requested Window Is The Dungeon Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "inline";
		document.getElementById('ResearchWindow').style.display = "none";
		document.getElementById('MarketWindow').style.display = "none";
		
		document.getElementById('WorkersTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab-Selected";
		document.getElementById('ResearchTab').className = "SelectionTab";
		document.getElementById('MarketTab').className = "SelectionTab";
		//Everything Above Here Makes Changes To The User Interface
	};
	
	if (window == 'Research') // Checks If Requested Window Is The Research Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "inline";
		document.getElementById('MarketWindow').style.display = "none";
		
		document.getElementById('WorkersTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab-Selected";
		document.getElementById('MarketTab').className = "SelectionTab";
		//Everything Above Here Makes Changes To The User Interface
	};
	
	if (window == 'Market') // Checks If Requested Window Is The Market Window
	{
		//Everything Below Here Makes Changes To The User Interface
		document.getElementById("WorkersWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
		document.getElementById('MarketWindow').style.display = "inline";
		
		document.getElementById('WorkersTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
		document.getElementById('MarketTab').className = "SelectionTab-Selected";
		//Everything Above Here Makes Changes To The User Interface
	};
};


































