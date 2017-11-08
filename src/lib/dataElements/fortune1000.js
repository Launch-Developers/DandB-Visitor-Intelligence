'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('fortune1000');
   }catch(e){
	   return null;
   }	
};