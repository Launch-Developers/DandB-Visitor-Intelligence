'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('techOfficeDemand');
   }catch(e){
	   return null;
   }	
};