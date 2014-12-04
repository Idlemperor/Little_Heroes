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
		
		document.getElementById('ResourceTab').className = "SelectionTab-Selected";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
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
		
		document.getElementById('ResourceTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab-Selected";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
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
		
		document.getElementById('ResourceTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab-Selected";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
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
		
		document.getElementById('ResourceTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab-Selected";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
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
		
		document.getElementById('ResourceTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab-Selected";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab";
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
		
		document.getElementById('ResourceTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab-Selected";
		document.getElementById('ResearchTab').className = "SelectionTab";
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
		
		document.getElementById('ResourceTab').className = "SelectionTab";
		document.getElementById('InventoryTab').className = "SelectionTab";
		document.getElementById('BuildingsTab').className = "SelectionTab";
		document.getElementById('HeroesTab').className = "SelectionTab";
		document.getElementById('PetsTab').className = "SelectionTab";
		document.getElementById('DungeonTab').className = "SelectionTab";
		document.getElementById('ResearchTab').className = "SelectionTab-Selected";
	};
};