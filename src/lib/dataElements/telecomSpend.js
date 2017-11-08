'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('telecomSpend');
   }catch(e){
	   return null;
   }	
};