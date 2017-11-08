'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('parentDuns');
   }catch(e){
	   return null;
   }	
};