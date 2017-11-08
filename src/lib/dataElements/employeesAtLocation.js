'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('employeesAtLocation');
   }catch(e){
	   return null;
   }	
};