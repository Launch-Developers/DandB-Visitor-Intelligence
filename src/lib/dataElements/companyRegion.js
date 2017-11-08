'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyRegion');
   }catch(e){
	   return null;
   }	
};