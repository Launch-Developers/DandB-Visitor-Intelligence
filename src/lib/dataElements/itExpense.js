'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('itExpense');
   }catch(e){
	   return null;
   }	
};