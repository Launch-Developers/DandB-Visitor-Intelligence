'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyCountry');
   }catch(e){
	   return null;
   }	
};