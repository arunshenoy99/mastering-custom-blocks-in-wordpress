<?php
require_once dirname( __FILE__ ) . '/Data/Blocks.php';
require_once dirname( __FILE__ ) . '/Models/Block.php';

/**
 * This class will house all the code necessary to load our blocks.
 */
class Application {
	/**
	 * This runs when a new object of this class is created.
	 */
	public function __construct() {
		// Enqueue block assets for both the site visitor and the editor.
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_assets' ) );
		// Add a new block category for our custom blocks.
		add_filter( 'block_categories_all', array( $this, 'add_block_category' ) );
		// Hide the admin bar in the front end for admin users. (Not necessary, just for demo)
		\add_action( 'wp_loaded', array( $this, 'hide_admin_bar' ) );

		// Register all our enabled blocks.
		$this->register_blocks();
	}

	/**
	 * Enqueue all the front end and block editor assets required for displaying the custom blocks.
	 *
	 * @return void
	 */
	public function enqueue_block_assets() {
		// Enqueue our Bootstrap JS file.
		wp_enqueue_script( 'bootstrap-js', CUSTOM_BLOCKS_PLUGIN_URL . 'assets/js/bootstrap.min.js', array( 'jquery-js', 'popper-js' ), CUSTOM_BLOCKS_PLUGIN_VERSION, true );
		// Enqueue our jQuery file.
		wp_enqueue_script( 'jquery-js', CUSTOM_BLOCKS_PLUGIN_URL . 'assets/js/jquery.min.js', null, CUSTOM_BLOCKS_PLUGIN_VERSION, true );
		// Enqueue our Popper file.
		wp_enqueue_script( 'popper-js', CUSTOM_BLOCKS_PLUGIN_URL . 'assets/js/popper.min.js', null, CUSTOM_BLOCKS_PLUGIN_VERSION, true );
		// Enqueue any additional JavaScript necessary to maintain our custom blocks.
		wp_enqueue_script( 'custom-blocks-js', CUSTOM_BLOCKS_PLUGIN_URL . '/assets/js/app.js', array( 'jquery-js' ), CUSTOM_BLOCKS_PLUGIN_VERSION, true );
		// Enqueue our Bootstrap CSS.
		wp_enqueue_style( 'bootstrap-css', CUSTOM_BLOCKS_PLUGIN_URL . '/assets/css/bootstrap.min.css', null, CUSTOM_BLOCKS_PLUGIN_VERSION );
		// Enqueue any additional CSS necessary to maintain our custom blocks
		wp_enqueue_style( 'block-theme-css', CUSTOM_BLOCKS_PLUGIN_URL . '/assets/css/styles.css', null, CUSTOM_BLOCKS_PLUGIN_VERSION );

	}

	/**
	 * Hides the admin bar in the front end for the admin user.
	 *
	 * @return void
	 */
	public function hide_admin_bar() {
		$user = wp_get_current_user();

		if ( 1 === count( $user->roles ) && 'administrator' === $user->roles[0] ) {
			show_admin_bar( false );
		}
	}

	/**
	 * Registers all our enabled blocks. See Data/Blocks.php for enabled blocks.
	 *
	 * @return void
	 */
	public function register_blocks() {

		$custom_blocks = Blocks::get_enabled();
		$namespace     = Blocks::get_namespace();

		foreach ( $custom_blocks as $custom_block_name => $properties ) {
			if ( 'static' !== $properties['type'] ) {
				new Block( $custom_block_name, true, $namespace );
				continue;
			}

			new Block( $custom_block_name, false, $namespace );
		}
	}

	/**
	 * Adds our namespace to the registered block categories.
	 *
	 * @param array $categories Registered block categories.
	 * @return array
	 */
	public function add_block_category( $categories ) {
		$categories[] = array(
			'slug'  => Blocks::get_namespace(),
			'title' => Blocks::get_title(),
		);

		return $categories;
	}
}

// Initialize the application.
new Application();
