'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('checktimestamp');
   }catch(e){
	   return null;
   }
};
