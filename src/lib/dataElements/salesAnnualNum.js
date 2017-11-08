'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('salesAnnualNum');
   }catch(e){
	   return null;
   }	
};