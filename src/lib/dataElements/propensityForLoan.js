'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('propensityForLoan');
   }catch(e){
	   return null;
   }	
};