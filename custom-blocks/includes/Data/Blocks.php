<?php

/**
 * Contains all the data about the blocks shipped by this plugin.
 */
final class Blocks {
	/**
	 * Namespace that all the custom blocks belong to.
	 *
	 * @var string
	 */
	protected static $namespace = 'custom-blocks';

	/**
	 * The list of blocks shipped by the plugin.
	 *
	 * @var array
	 */
	protected static $blocks = array(
		'static-card'     => array(
			'type'    => 'static',
			'enabled' => true,
		),
		'editable-card'   => array(
			'type'    => 'static',
			'enabled' => true,
		),
		'adjustable-card' => array(
			'type'    => 'static',
			'enabled' => true,
		),
		'coloured-card'   => array(
			'type'    => 'static',
			'enabled' => true,
		),
		'dynamic-card'    => array(
			'type'    => 'dynamic',
			'enabled' => true,
		),
	);

	/**
	 * Get all the enabled blocks.
	 *
	 * @return array
	 */
	public static function get_enabled() {
		return array_filter( self::$blocks, array( __CLASS__, 'check_enabled' ) );
	}

	/**
	 * Get the namespace.
	 *
	 * @return string
	 */
	public static function get_namespace() {
		return self::$namespace;
	}

	/**
	 * Get the human readable title for our namespace.
	 *
	 * @return string
	 */
	public static function get_title() {
		return __( 'Custom Blocks', 'custom-blocks' );
	}

	/**
	 * Checks if a block has been enabled.
	 *
	 * @param array $value The value to be checked for.
	 * @return boolean
	 */
	private static function check_enabled( $value ) {
		return true === $value['enabled'];
	}
}
