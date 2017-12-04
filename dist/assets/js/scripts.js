//call the data from the dealers API
var getDealers = new XMLHttpRequest();
getDealers.open('GET', '/dist/assets/data/dealers.json');
getDealers.onload = function() {
	
	var siteData = JSON.parse(getDealers.response);
	function print(target, message) {
		document.getElementById(target).innerHTML = message
	};

	print('numberOfDealers', siteData.dealers.length);
	print('dealerZipcode', siteData.zipcode);
	
	for( var i = 0; i < siteData.dealers.length; i++){
		print('dealer-title', siteData.dealers[i].data.name) 
		print('dealer-phone', siteData.dealers[i].data.phone1) 
		print('dealer-hours', siteData.dealers[i].data.weekHours.mon) 
	}
	
}
getDealers.send()