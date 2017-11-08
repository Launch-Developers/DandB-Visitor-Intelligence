'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('ultimateDuns');
   }catch(e){
	   return null;
   }	
};