'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('sicCodes');
   }catch(e){
	   return null;
   }	
};