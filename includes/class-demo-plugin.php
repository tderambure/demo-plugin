<?php
if (!defined('ABSPATH')) {
    exit;
}

class Demo_Plugin {
    public function __construct() {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_filter('body_class', [$this, 'add_lazy_loading_class']);
    }

    public function enqueue_scripts(): void {
        wp_enqueue_script(
            'demo-plugin',
            plugin_dir_url(dirname(__FILE__)) . 'dist/js/demo-plugin.min.js',
            [],
            '1.0.0',
            true
        );
    }

    public function add_lazy_loading_class(array $classes): array {
        $classes[] = 'demo-plugin-enabled';
        return $classes;
    }
}
