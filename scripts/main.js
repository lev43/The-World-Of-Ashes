Log.info('Start main [The world of ashes]');
var scripts=[
	"TurretsMod/items",
	"TurretsMod/Turrets",
	"Sapphirium/blocks/blocks",
	"Sapphirium/blocks/turrets",
	"Sapphirium/statuses/statuses",
	"Sapphirium/units",
	"Sapphirium/liquids",
	"Sapphirium/weathers",
	"Sapphirium/items",
	"Sapphirium/sectors"
]
for(var i=0;i<scripts.length;i++){
	try{
		Log.info('require script: '+scripts[i]);
		require(scripts[i]);
	}catch(err){
		Log.err('Error script: '+scripts[i]);
		Log.err('Error: '+err);
	};
};
Log.info('End main [The world of ashes]');
