'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyZip5');
   }catch(e){
	   return null;
   }	
};