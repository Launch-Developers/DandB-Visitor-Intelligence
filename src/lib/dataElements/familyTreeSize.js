'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('familyTreeSize');
   }catch(e){
	   return null;
   }	
};