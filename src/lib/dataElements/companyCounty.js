'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyCounty');
   }catch(e){
	   return null;
   }	
};