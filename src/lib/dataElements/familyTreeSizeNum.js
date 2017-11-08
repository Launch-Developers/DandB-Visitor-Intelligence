'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('familyTreeSizeNum');
   }catch(e){
	   return null;
   }	
};