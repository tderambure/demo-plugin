<?php
/**
 * Plugin Name: Demo Plugin
 * Version: 1.0.0
 * Author: Thomas
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once plugin_dir_path(__FILE__) . 'includes/class-demo-plugin.php';

function demo_plugin_init() {
    new Demo_Plugin();
}

add_action('plugins_loaded', 'demo_plugin_init');
