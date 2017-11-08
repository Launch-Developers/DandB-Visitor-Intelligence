'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyName');
   }catch(e){
	   return null;
   }	
};