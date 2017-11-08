'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('propensityForLoc');
   }catch(e){
	   return null;
   }	
};