

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('recipes', event => {
//event.shaped is a shortcut for event.recipes.minecraft.crafting_shaped
event.shaped(
	Item.of('mysticalagriculture:prosperity_shard', 4), // arg 1: output
	[ 
	  'BAB', 
	  'ACA', // arg 2: the shape (array of strings)
	  'BAB'  
	],
	{
	  A: 'mekanism:dust_fluorite', 
	  B: 'botania:mana_powder',  //arg 3: the mapping object
	  C: 'agricraft:agri_nugget_quartz'   
	}
  )

  event.shaped(
	Item.of('twilightforest:maze_map_focus', 1), // arg 1: output
	[ 
	  'ABA', 
	  'CDC', // arg 2: the shape (array of strings)
	  'AEA'  
	],
	{
	  A: 'minecraft:bone_meal', 
	  B: 'waystones:attuned_shard',  //arg 3: the mapping object
	  C: 'minecraft:bone',
	  D: 'minecraft:beef',
	  E: 'minecraft:rotten_flesh'  
	}
  )






})





