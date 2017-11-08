'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyMsa');
   }catch(e){
	   return null;
   }	
};