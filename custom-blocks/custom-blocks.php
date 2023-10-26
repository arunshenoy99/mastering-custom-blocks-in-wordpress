<?php
/**
 * Plugin Name: Custom Blocks
 * Description: Extend the block editor functionality with custom blocks.
 * Version: 1.0.0
 * Author: Arun R Shenoy
 * Author Uri: https://github.com/arunshenoy99
 *
 * @package           CustomBlocks
 */

// Exit if accessed directly i.e load the url of this php file in the browser.
if ( ! defined( 'ABSPATH' ) ) { exit;
}

// Defines a constant for the plugin version.
if ( ! defined( 'CUSTOM_BLOCKS_PLUGIN_VERSION' ) ) {
	define( 'CUSTOM_BLOCKS_PLUGIN_VERSION', '1.0.0' );
}

// Defines the plugin URL relative to the host.
if ( ! defined( 'CUSTOM_BLOCKS_PLUGIN_URL' ) ) {
	define( 'CUSTOM_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

// Defines the plugin directory to load assets.
if ( ! defined( 'CUSTOM_BLOCKS_PLUGIN_DIR' ) ) {
	define( 'CUSTOM_BLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

// Load in our main application code.
require_once dirname( __FILE__ ) . '/includes/Application.php';
