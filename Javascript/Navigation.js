function display(window)
{

	if (window == 'Resources')
	{
		document.getElementById("ResourceWindow").style.display = "inline";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
	};
	
	if (window == 'Inventory')
	{
		document.getElementById("ResourceWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "inline";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
	};
	
	if (window == 'Buildings')
	{
		document.getElementById("ResourceWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "inline";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
	};
	
	if (window == 'Heroes')
	{
		document.getElementById("ResourceWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "inline";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
	};
	
	if (window == 'Pets')
	{
		document.getElementById("ResourceWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "inline";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "none";
	};
	
	if (window == 'Dungeon')
	{
		document.getElementById("ResourceWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "inline";
		document.getElementById('ResearchWindow').style.display = "none";
	};
	
	if (window == 'Research')
	{
		document.getElementById("ResourceWindow").style.display = "none";
		document.getElementById("InventoryWindow").style.display = "none";
		document.getElementById("BuildingsWindow").style.display = "none";
		document.getElementById('HeroesWindow').style.display = "none";
		document.getElementById('PetsWindow').style.display = "none";
		document.getElementById('DungeonWindow').style.display = "none";
		document.getElementById('ResearchWindow').style.display = "inline";
	};
};