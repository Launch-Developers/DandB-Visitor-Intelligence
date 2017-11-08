'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('howTheyPay');
   }catch(e){
	   return null;
   }	
};