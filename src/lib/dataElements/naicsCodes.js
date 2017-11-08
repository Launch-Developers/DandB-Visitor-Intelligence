'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('naicsCodes');
   }catch(e){
	   return null;
   }	
};