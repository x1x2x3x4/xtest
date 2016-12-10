const utils = require('./utils');

const htmlBody = function(province) {
	var img;	
	switch(province) {		
		case 'Arcane University':
			img='https://staticdelivery.nexusmods.com/mods/101/images/30119-2-1266809297.jpg';
			break;		
		case 'Morrowind':
			img='https://levelingcriticism.files.wordpress.com/2012/06/vivec-before.jpg';
			break;		
		case 'Skyrim': img='http://www.newgamenetwork.com/images/uploads/gallery/TES5Skyrim/tes5skyrim_04.jpg';
	}
	img = ' style="background-image:url('+img+');background-repeat: no-repeat;background-size: 100% auto"';	
	return '<!DOCTYPE html><html><head><h1 style="text-shadow: 2px 2px 4px white;">Xed the Mage</h1></head><body'+img+'><p style="text-shadow: 2px 2px 4px white;">the adventures of the Mage in <strong>'+province+'</strong></p></body></html>';
}

const provinceHome = function(){
	//utils.sleep(10000);
	return htmlBody('Arcane University');
}

const provinceMorrowind = function() {
	//utils.sleep(10000);
	return htmlBody('Morrowind');	
}

const provinceSkyrim = function() {
	return htmlBody('Skyrim');	
}

exports.Home = provinceHome;
exports.Morrowind = provinceMorrowind;
exports.Skyrim = provinceSkyrim;