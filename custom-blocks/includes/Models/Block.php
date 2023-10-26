<?php

/**
 * Initializes a custom block.
 */
class Block {

	/**
	 * The constructor that kicks off initialization of a custom block.
	 *
	 * @param string  $block_name The kebab cased name of the block.
	 * @param boolean $render_callback Whether the block has a render callback or not.
	 * @param string  $namespace The namespace that the custom block belongs to.
	 */
	public function __construct( $block_name, $render_callback = null, $namespace ) {
		$this->block_name      = $block_name;
		$this->render_callback = $render_callback;
		$this->namespace       = $namespace;
		\add_action( 'init', array( $this, 'initialize_block' ) );
	}

	/**
	 * Initializes all the block specific assets and registers the block
	 *
	 * @return void
	 */
	public function initialize_block() {

		\wp_register_script( $this->block_name, CUSTOM_BLOCKS_PLUGIN_URL . "build/{$this->block_name}.js", array( 'wp-blocks', 'wp-editor', 'bootstrap-js', 'wp-i18n' ), CUSTOM_BLOCKS_PLUGIN_VERSION );

		$args = array(
			'editor_script' => $this->block_name,
			'category'      => $this->namespace,
		);

		if ( $this->render_callback ) {
			$args['render_callback'] = array( $this, 'render_callback' );
		}

		\register_block_type( "{$this->namespace}/{$this->block_name}", $args );
	}

	/**
	 * Requires the PHP render callback
	 *
	 * @param array $attributes The attributes of the block.
	 * @param array $content The block content
	 * @return string
	 */
	public function render_callback( $attributes, $content ) {
		ob_start();
		require CUSTOM_BLOCKS_PLUGIN_DIR . "blocks/{$this->block_name}/{$this->block_name}.php";
		return ob_get_clean();
	}
}
