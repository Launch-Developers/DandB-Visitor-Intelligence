'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('walletSize');
   }catch(e){
	   return null;
   }	
};