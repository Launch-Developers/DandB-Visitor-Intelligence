'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyZip4');
   }catch(e){
	   return null;
   }	
};