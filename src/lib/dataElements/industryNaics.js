'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('industryNaics');
   }catch(e){
	   return null;
   }	
};