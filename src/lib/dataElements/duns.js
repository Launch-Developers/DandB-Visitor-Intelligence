'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('duns');
   }catch(e){
	   return null;
   }	
};