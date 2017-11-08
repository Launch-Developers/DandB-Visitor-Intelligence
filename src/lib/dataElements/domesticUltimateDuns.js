'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('domesticUltimateDuns');
   }catch(e){
	   return null;
   }	
};