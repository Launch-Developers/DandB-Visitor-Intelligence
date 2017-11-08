'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('networthNum');
   }catch(e){
	   return null;
   }	
};