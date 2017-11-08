'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('cardOfferResponsiveness');
   }catch(e){
	   return null;
   }	
};
