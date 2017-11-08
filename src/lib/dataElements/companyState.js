'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('companyState');
   }catch(e){
	   return null;
   }	
};