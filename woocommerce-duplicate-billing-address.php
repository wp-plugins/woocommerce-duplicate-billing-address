<?php
/*
Plugin Name: WooCommerce Duplicate Billing Address
Plugin URI: http://eversionsystems.com
Description: Adds a checkbox in the edit user profile dashboard page to duplicate the billing to shipping address in WooCommerce
Version: 1.12
Author: Andrew Schultz
Author URI: http://eversionsystems.com
Compatibility : up to WordPress 4.2.2
License: GPL2
*/
   
define('ES_DUPLICATE_PLUGIN_URL', plugin_dir_url( __FILE__ ));

if ( ! function_exists( 'is_plugin_active' ) )
	include_once(ABSPATH.'wp-admin/includes/plugin.php');	//required for checking active plugin

//Only load plugin if WooCommerce is active
if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
	//Display duplicate billing to shipping address
	add_action('edit_user_profile', 'es_profile_duplicate_billing_address', 99);
	//if current user then use this hook to show their profile elements
	add_action('show_user_profile', 'es_profile_duplicate_billing_address', 99);

	//Attach low priority so it shows last
	function es_profile_duplicate_billing_address() {
		?>
		<table class="form-table">
			<tr>
				<th><label for="duplicate-billing-address">Duplicate Address</label></th>
				<td>
					<input type="checkbox" id="duplicate-billing-address" name="duplicate-billing-address" value="yes">Copy billing to shipping address
				</td>
			</tr>
		</table>
		<?php
	}

	add_action( 'admin_enqueue_scripts', 'es_admin_enqueue_scripts' );

	function es_admin_enqueue_scripts($hook) {

		//Ensure functionality works when editing your own and other profiles
		if ($hook == 'profile.php' OR $hook == 'user-edit.php') {
			//Duplicate Billing to Shipping Address
			wp_enqueue_script( 'dashboard-duplicate-bill-address', ES_DUPLICATE_PLUGIN_URL . 'js/admin-duplicate-billing-address.js', array( 'jquery' ), '1.0', false );
		}
	}
}
   
?>