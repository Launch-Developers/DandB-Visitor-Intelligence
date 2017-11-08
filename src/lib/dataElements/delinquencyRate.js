'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('delinquencyRate');
   }catch(e){
	   return null;
   }	
};