$.getJSON( '../../dist/assets/data/dealers.js', function( siteData ) {



//let getDealers = new XMLHttpRequest();
//getDealers.open('GET', '/dist/assets/data/dealers.json')
//getDealers.onload = function(){
//let siteData = JSON.parse(getDealers.responseText);
	
//	print to div faster
	const print = (target, message) => {
		document.getElementById(target).innerHTML = message;
	}
//	console.log faster
	const log = (item) => {
		console.log(item);
	}
	
	//list all dealers
	let listAllDealers = [];
	for ( let companyID in siteData.dealers ) {
		function listAll(){
		listAllDealers += '<div class="dealer" id="' + siteData.dealers[companyID].data.companyID + '">';
			listAllDealers += '<h1 class="dealer-title">' +  siteData.dealers[companyID].data.name + '</h1>';
			listAllDealers += '<div class="dealer-phone-icon"></div>';
			listAllDealers += '<p class="dealer-phone">' +  siteData.dealers[companyID].data.phone1 + '</p>';
			listAllDealers += '<p class="dealer-cant-speak">' + "Can't talk now? Click below to send an email!" + '</p>';
			listAllDealers += '<div class="dealer-contact-pro-btn"> <div class="dealer-contact-pro-icon"></div> <p class="">Contact This Pro</p> </div>';
			listAllDealers += '<div class="dealer-business-hours">';
				listAllDealers += '<h6 class="">Business Hours</h6>';
				listAllDealers += '<p> Weekdays ' + siteData.dealers[companyID].data.weekHours.mon + '</p>';
		
					if(siteData.dealers[companyID].data.weekHours.sat === "" || null){
						listAllDealers += '<p> Saturdays Closed</p>';
					}else{
						listAllDealers += '<p> Saturdays ' + siteData.dealers[companyID].data.weekHours.sat + '</p>';
					}
		
					if(siteData.dealers[companyID].data.weekHours.sun === "" || null){
						listAllDealers += '<p> Sundays Closed</p>';
					}else{
						listAllDealers += '<p> Sundays ' + siteData.dealers[companyID].data.weekHours.sun + '</p>';
					}
			listAllDealers += '</div>';//end of business hours
					listAllDealers += '<div class="dealer-footer">'
						listAllDealers += '<table style="width: 100%">';
						listAllDealers +=	'<tr>'
						listAllDealers +=		'<td class="cert">' + '<i id="installLogo"></i><p>' + siteData.dealers[companyID].data.certifications[0] + '</p></td>'
						listAllDealers +=		'<td class="cert">' + '<i id="commLogo"></i><p>' + siteData.dealers[companyID].data.certifications[1] + '</td>'
						listAllDealers +=	'</tr>'
						listAllDealers +=	'<tr>'
						listAllDealers +=		'<td class="cert">' + '<i id="resLogo"></i><p>' + siteData.dealers[companyID].data.certifications[2] + '</td>'
						listAllDealers +=		'<td class="cert">' + '<i id="servLogo"></i><p>' + siteData.dealers[companyID].data.certifications[3] + '</td>'
						listAllDealers +=	'</tr>'
						listAllDealers += '</table>';
					listAllDealers += '</div>'//and of dealer footer
		  listAllDealers += '</div>';	
		} listAll();
		
}//end of dealers loop
	
//			remove all undefined td
			$(function() {
				$('.dealer').hide();		
				
				
				$('td.cert p').each(function() {
					let text = $(this).text();
					$(this).text(text.replace('undefined', '')); 
					$('td.cert i').siblings('.servLogo').hide(); 
				});
				
//				if this is clicked fadeIn(1000) dealers with matching certs
//				start with showing all witih service pro
				$('#401929, #401928, #401927, #401924').fadeIn(1000);
				
				$('#serviceCheckBox').on('click', function() {
					$(this).attr('checked', 'checked')
					if ( $(this).prop("checked") === true ) {
						$('#401929, #401928, #401927, #401924').fadeIn(1000);
					}else if ( $(this).prop("checked") === false ) {
						$('#401929, #401928, #401927, #401924').fadeOut(200);
					}
				})
				
				$('#installCheckBox').on('click', function() {
					$(this).attr('checked', 'checked')
					if ( $(this).prop("checked") === true ) {
						$('#401929, #401928, #401927, #401926, #401925, #401924, #401923').fadeIn(1000);
					}else if ( $(this).prop("checked") === false ) {
						$('#401929, #401928, #401927, #401926, #401925, #401924, #401923').fadeOut(200);
					}
				})
				
				$('#residentialCheckBox').on('click', function() {
					$(this).attr('checked', 'checked')
					if ( $(this).prop("checked") === true ) {
						$('#401929, #401928, #401927, #401926, #401925, #401924').fadeIn(1000);
					}else if ( $(this).prop("checked") === false ) {
						$('#401929, #401928, #401927, #401926, #401925, #401924').fadeOut(200);
					}
				})
				
				$('#commercialCheckBox').on('click', function() {
					$(this).attr('checked', 'checked')
					if ( $(this).prop("checked") === true ) {
						$('#401928, #401927, #401926, #401924, #401923').fadeIn(1000);
					}else if ( $(this).prop("checked") === false ) {
						$('#401928, #401927, #401926, #401924, #401923').fadeOut(200);
					}
				})
				//end of filter
				
				
//				$('.dealer').each(function() {
//					$('.dealer-footer').each(function() {
//						log($('.cert').text() === "Service Pro".count );
//					})
//				})
				
//				send random pool pro and inject when Find Pool Pro is clicked
				$('.find-pool-pro').on('click', function(){
				$('.modal').removeClass('hidden');
					
					$('.modal').fadeIn();
					let randomPro = Math.round(Math.random() * 6);
					$('.modal-header p').html(siteData.dealers[randomPro].data.name);				
					$('#form-title').html("Fill out the form below and " + siteData.dealers[randomPro].data.name + " will get in touch.");				
				});
				
				$('.dealer-contact-pro-btn').on('click', function(){
				$('.modal').removeClass('hidden');
					
					$('.modal-header p').html( 
					$(this).siblings('.dealer-title').text()
					)				
				$('#form-title').html("Fill out the form below and " + $(this).siblings('.dealer-title').text() + " will get in touch.");
				});
				
				//close modal on click
				$('#modal-close').on('click', function() {
					$('.modal').addClass('hidden');
				});
				
//			listen for screen resizing and shrik - experimental
				if( $('body').innerWidth() < 450) {
					$('.modal-body').css({"width": "355px"});
				
				//toggle filter
				$('#filterResults').on('click', function(){
					$('#checkboxes').slideToggle('slow');
				})
					
				};
				
//				refresh on resize
				$(window).on('resize', function() {
					window.location.href=window.location.href
				})
				
				
				
				
			});//end of jquery


	print('dealers', listAllDealers);
	print('dealerCount', siteData.dealers.length);
	print('dealerZipcode', siteData.zipcode);


});
//getDealers.send();

