'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyCity');
   }catch(e){
	   return null;
   }	
};