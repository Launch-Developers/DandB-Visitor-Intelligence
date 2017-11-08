'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('industrySic');
   }catch(e){
	   return null;
   }	
};