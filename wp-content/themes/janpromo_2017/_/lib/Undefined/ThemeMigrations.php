<?php
/**
 * Fitstar
 * User: Justin
 * Date: 2016-03-10
 * Time: 12:03 PM
 */

namespace Undefined;

class ThemeMigrations {

	public $option_key;

	protected $migrations = array();
	protected $migrated = false;

	protected $registry = array();

	private static $instance = null;

	public static function get_instance() {
		NULL === self::$instance and self::$instance = new self;
		return self::$instance;
	}

	public function __construct() {

		$theme = wp_get_theme();
		$this->option_key = $theme->template . '_migrations';


	}


	public function register($key, $func, $reset=false) {
		array_push($this->registry, array(
			'key' =>$key,
			'func' => $func,
			'reset' => $reset
		));
	}


	public function migrate($option_key = null) {

		if (isset($option_key)) {
			$this->option_key = $option_key;
		}

		$migrations = get_option($this->option_key);

		if (is_array($migrations)) {
			$this->migrations = $migrations;
		}

		foreach ($this->registry as $migration) {

			if (!isset($this->migrations[$migration['key']]) || $migration['reset'] === true ) {

				try {

					call_user_func($migration['func']);
					$this->migrations[$migration['key']] = date('Y-m-d H:i:s');
					$this->migrated = true;

				} catch (\Exception $e) {

				}

			}

		}

		if ($this->migrated) update_option($this->option_key, $this->migrations);

	}


}

