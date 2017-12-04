var listServerPro = [];
	for ( let companyID in siteData.dealers ) {
		listServerPro += '<div class="dealer">';
			listServerPro += '<h1 class="dealer-title">' +  siteData.dealers[companyID].data.name + '</h1>';
			listServerPro += '<div class="icon-phone"></div>';
			listServerPro += '<p class="dealer-phone">' +  siteData.dealers[companyID].data.phone1 + '</p>';
			listServerPro += '<p class="dealer-cant-speak">' + "Can't talk now? Click below to send an email!" + '</p>';
			listServerPro += '<div class="dealer-contact-pro-btn"> <div class="dealer-contact-pro-icon"></div> <p class="">Contact This Pro</p> </div>';
			listServerPro += '<div class="dealer-business-hours">';
				listServerPro += '<h6 class="">Business Hours</h6>';
				listServerPro += '<p> Weekdays ' + siteData.dealers[companyID].data.weekHours.mon + '</p>';
		
					if(siteData.dealers[companyID].data.weekHours.sat === "" || null){
						listServerPro += '<p> Saturdays Closed</p>';
					}else{
						listServerPro += '<p> Saturdays ' + siteData.dealers[companyID].data.weekHours.sat + '</p>';
					}
		
					if(siteData.dealers[companyID].data.weekHours.sun === "" || null){
						listServerPro += '<p> Sundays Closed</p>';
					}else{
						listServerPro += '<p> Sundays ' + siteData.dealers[companyID].data.weekHours.sun + '</p>';
					}
			listServerPro += '</div>';//end of business hours
					listServerPro += '<div class="dealer-footer">'
						listServerPro += '<table style="width:100%">';
						listServerPro +=	'<tr>'
						listServerPro +=		'<td class="cert">' + siteData.dealers[companyID].data.certifications[0] + '</td>'
						listServerPro +=		'<td class="cert">' + siteData.dealers[companyID].data.certifications[1] + '</td>'
						listServerPro +=	'</tr>'
						listServerPro +=	'<tr>'
						listServerPro +=		'<td class="cert">' + siteData.dealers[companyID].data.certifications[2] + '</td>'
						listServerPro +=		'<td class="cert">' + siteData.dealers[companyID].data.certifications[3] + '</td>'
						listServerPro +=	'</tr>'
						listServerPro += '</table>';
					listServerPro += '</div>'//and of dealer footer
		  listServerPro += '</div>';	
