'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('propensityForLease');
   }catch(e){
	   return null;
   }	
};