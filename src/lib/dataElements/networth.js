'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('networth');
   }catch(e){
	   return null;
   }	
};