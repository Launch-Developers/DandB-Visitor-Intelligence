'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('employeesAtLocationNum');
   }catch(e){
	   return null;
   }	
};