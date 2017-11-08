'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('salesAnnual');
   }catch(e){
	   return null;
   }	
};