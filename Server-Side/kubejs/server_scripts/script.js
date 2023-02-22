

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

  event.remove({ id: 'tiab:time_in_a_bottle' })

  event.shaped(
	Item.of('tiab:time_in_a_bottle', 1), // arg 1: output
	[ 
	  'ABA', 
	  'BCB', // arg 2: the shape (array of strings)
	  'ABA'  
	],
	{
	  A: 'minecraft:nether_star', 
	  B: 'minecraft:netherite_block',  //arg 3: the mapping object
	  C: 'cyclic:clock'
 
	}
  )

  event.shaped(
	Item.of('everlastingabilities:ability_totem', '{"everlastingabilities:abilityStoreStack":[{level:1,name:"everlastingabilities:bonemealer"}]}'),
	[ 
	  'ABA', 
	  'BCB', // arg 2: the shape (array of strings)
	  'ABA'  
	],
	{
	  A: 'minecraft:bone_block', 
	  B: 'mysticalagriculture:mystical_fertilizer',  //arg 3: the mapping object
	  C: Item.of('mysticalagriculture:supremium_watering_can').ignoreNBT()
 
	}
  )

  event.shaped(
	Item.of('everlastingabilities:ability_totem', '{"everlastingabilities:abilityStoreStack":[{level:1,name:"everlastingabilities:magnetize"}]}'),
	[ 
	  'ABA', 
	  'BCB', // arg 2: the shape (array of strings)
	  'ABA'  
	],
	{
	  A: 'create_sa:copper_magnet', 
	  B: 'minecraft:lodestone',  //arg 3: the mapping object
	  C: Item.of('everlastingabilities:ability_bottle').ignoreNBT()
 
	}
  )

  event.shaped(
	Item.of('everlastingabilities:ability_totem', '{"everlastingabilities:abilityStoreStack":[{level:1,name:"everlastingabilities:flight"}]}'),
	[ 
	  'ABE', 
	  'DCD', // arg 2: the shape (array of strings)
	  'FBG'  
	],
	{
	  A: 'twilightforest:carminite_block', 
	  B: Item.of('minecraft:elytra', '{Damage:0}'),  //arg 3: the mapping object
	  C: Item.of('everlastingabilities:ability_bottle').ignoreNBT(),
	  D: 'minecraft:phantom_spawn_egg',
	  E: 'twilightforest:fiery_block',
	  F: 'twilightforest:knightmetal_block',
	  G: 'twilightforest:steeleaf_block',

 
	}
  )


event.shaped(
  Item.of('everlastingabilities:ability_totem', '{"everlastingabilities:abilityStoreStack":[{level:3,name:"everlastingabilities:saturation"}]}'),
  [ 
	'ABA', 
	'BCB', // arg 2: the shape (array of strings)
	'ADA'  
  ],
	{  A: 'minecraft:gold_block', 
	B: 'mysticalagradditions:supremium_apple',  //arg 3: the mapping object
	C: Item.of('botania:infinite_fruit').ignoreNBT(),
	D: 'cyclic:lunchbox',
	}

  )
  

})




