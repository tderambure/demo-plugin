
# Demo Plugin

A **WordPress plugin** designed to work seamlessly with the **Demo Theme** and **WordPress Bedrock** project structure. This plugin integrates with your WordPress installation, offering additional functionality tailored to the theme.

## Installation

1. Clone this repository into the `web/app/plugins/` directory of your WordPress Bedrock project:

   ```bash
   git clone https://github.com/tderambure/demo-plugin.git
   ```

2. If needed, in a node environnement, install the plugin's dependencies:

   ```bash
   cd web/app/plugins/demo-plugin
   npm install
   ```

## Asset Compilation

If needed, to generate the assets, in a node environnement, run the following command:

```bash
npm run build
```

This will compile the necessary CSS and JavaScript files for the plugin.

## Directory Structure

Your plugin should be placed in:

```
web/app/plugins/demo-plugin
```
