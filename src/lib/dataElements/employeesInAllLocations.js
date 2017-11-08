'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('employeesInAllLocations');
   }catch(e){
	   return null;
   }	
};