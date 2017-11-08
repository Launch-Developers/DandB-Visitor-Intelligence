'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('marketability');
   }catch(e){
	   return null;
   }	
};