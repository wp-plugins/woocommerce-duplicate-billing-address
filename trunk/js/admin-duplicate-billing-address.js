/**
* Name : 	admin-duplicate-billing-address.js
* Author : 	Andrew Schultz
* Purpose : Copy Woocommerce billing address to customer address in the wordpress dashboard
* Version : 1.1
* History : v1.1 - Added support for country and state dropdowns
*/

jQuery(document).ready( function($) {
	//set initial state of checkbox to unchecked
	$('#duplicate-billing-address').removeAttr('checked');
	
	$( "#duplicate-billing-address" ).change(function() {
		if($(this).is(":checked")) {
			//if checked then copy all values
            $("#shipping_first_name").val($('#billing_first_name').val());
			$("#shipping_last_name").val($('#billing_last_name').val());
			$("#shipping_company").val($('#billing_company').val());
			$("#shipping_address_1").val($('#billing_address_1').val());
			$("#shipping_address_2").val($('#billing_address_2').val());
			$("#shipping_city").val($('#billing_city').val());
			$("#shipping_postcode").val($('#billing_postcode').val());
			$("#shipping_state").val($('#billing_state').val());
			$("#shipping_country").val($('#billing_country').val());
			
			//WooCommerce 2.3?? introduced predictive dropdown selectors
			if( $('#s2id_shipping_country').length ) {  
				//Shipping Country predictive dropdown
				$('#select2-chosen-2').text($('#select2-chosen-1').text());
			}
			if( $('#s2id_shipping_state').length ) {  
				//Shipping State predictive dropdown
				$('#select2-chosen-4').text($('#select2-chosen-3').text());
			}
        }
		else {
			//Clear values when unchecked
			$("#shipping_first_name").val('');
			$("#shipping_last_name").val('');
			$("#shipping_company").val('');
			$("#shipping_address_1").val('');
			$("#shipping_address_2").val('');
			$("#shipping_city").val('');
			$("#shipping_postcode").val('');
			$("#shipping_state").val('');
			$("#shipping_country").val('');
			
			if( $('#s2id_shipping_country').length ) {  
				//Shipping Country predictive dropdown
				$('#select2-chosen-2').text('');
			}
			if( $('#s2id_shipping_state').length ) {  
				//Shipping State predictive dropdown
				$('#select2-chosen-4').text('');
			}
		}
	});
});