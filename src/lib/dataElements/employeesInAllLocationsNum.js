'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('employeesInAllLocationsNum');
   }catch(e){
	   return null;
   }	
};