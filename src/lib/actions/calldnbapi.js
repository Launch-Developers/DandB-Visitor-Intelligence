'use strict';

//var loadExtfile = require('@turbine/load-script');
//var getExtensionSettings = require('@turbine/get-extension-settings');
var loadExtfile = require('@adobe/reactor-load-script');
module.exports = function(settings) {

    var apikey=turbine.getExtensionSettings().apikey;
    var syncvalue="//"+apikey+".d41.co/sync/"

	loadExtfile(syncvalue).then(function() {
    loadExtfile('//cdn-0.d41.co/tags/dnb_coretag_v3.min.js').then(function() {

    try {
		var selectionarray=['duns','parentDuns','domesticUltimateDuns','ultimateDuns','companyName','companyAddress','companyCity','companyState','companyZip5','companyZip4','companyCounty','companyMsa','companyRegion','companyCountry','fortune1000','salesAnnual','salesAnnualNum','employeesAtLocation','employeesAtLocationNum','employeesInAllLocations','employeesInAllLocationsNum','familyTreeSize','familyTreeSizeNum','networth','networthNum','walletSize','cardOfferResponsiveness','propensityForLoan','propensityForLease','propensityForLoc','itExpense','telecomSpend','techOfficeDemand','delinquencyRate','howTheyPay','marketability','industryNaics','industrySic','naicsCodes','sicCodes'];
		turbine.logger.info("D&B Api Call is Started Successfully");
        dnbvid.getData(apikey, "json", "t", function(dnb_Data) {
				if (dnb_Data.status == "200") {
				for(var i=0;i<selectionarray.length;i++){
					if(dnb_Data[selectionarray[i]]!=undefined){
						localStorage.setItem(selectionarray[i],dnb_Data[selectionarray[i]]);
					}else{
						localStorage.setItem(selectionarray[i],null);
					}
				}
				}else{
					for(var i=0;i<selectionarray.length;i++){
						localStorage.setItem(selectionarray[i],null);
						}
				}
				var timeInMs = Date.now();
				localStorage.setItem("checktimestamp",timeInMs);
				turbine.logger.info("D&B Api Call time"+timeInMs);
				turbine.logger.info("D&B Api Call is completed Successfully");

		});


        } catch (e) {
          console.log(e);
        }
    });
  });
};
