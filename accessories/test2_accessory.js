var exports = module.exports = {};

var execute = function(accessory,characteristic,value){ console.log("executed accessory: " + accessory + ", and characteristic: " + characteristic + ", with value: " +  value + "."); }


exports.accessory = {
  displayName: "Test Accessory 2",
  username: "1B:2B:3C:4D:5E:FF",
  pincode: "031-45-154",
  services: [{
  	_comment: "info service",
    sType: "0000003E-0000-1000-8000-0026BB765291", 
    characteristics: [{
    	_comment: "name characteristic",
    	cType: "00000023-0000-1000-8000-0026BB765291", 
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Test Accessory 2",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Bla",
		designedMaxLength: 255    
    },{
    	_comment: "manufacturer characteristic",
    	cType: "00000020-0000-1000-8000-0026BB765291", 
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Oltica",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Bla",
		designedMaxLength: 255    
    },{
    	_comment: "model characteristic",
    	cType: "00000021-0000-1000-8000-0026BB765291",
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Rev-2",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Bla",
		designedMaxLength: 255    
    },{
    	_comment: "serialnumber characteristic",
    	cType: "00000030-0000-1000-8000-0026BB765291", 
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "A1S2NASF88EK",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Bla",
		designedMaxLength: 255    
    },{
    	_comment: "identify characteristic",
    	cType: "00000014-0000-1000-8000-0026BB765291", 
    	onUpdate: null,
    	perms: ["pw"],
		format: "bool",
		initialValue: false,
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Identify Accessory",
		designedMaxLength: 1    
    }]
  },{
  	_comment: "light service",
    sType: "00000043-0000-1000-8000-0026BB765291", 
    characteristics: [{
    	_comment: "name characteristics",
    	cType: "00000023-0000-1000-8000-0026BB765291",
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Light 2",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Bla ",
		designedMaxLength: 255   
    },{
    	_comment: "light characteristics",
    	cType: "00000025-0000-1000-8000-0026BB765291",
        onUpdate: function(value) { console.log("Change:",value); execute("Test Accessory 2", "light service", value); },
    	perms: ["pw","pr","ev"],
		format: "bool",
		initialValue: false,
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Turn On the Lights",
		designedMaxLength: 1    
    }]
  }]
}