'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyAddress');
   }catch(e){
	   return null;
   }	
};