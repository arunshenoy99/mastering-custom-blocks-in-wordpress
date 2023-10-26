# Mastering Custom Blocks In WordPress

## Custom Blocks

1. You can use any local development environment that you are comfortable with; just ensure that it is on the latest version of WordPress.
2. Create a new folder in your plugins directory and give it an appropriate kebab-cased name. We are building a custom block, so we will name the plugin "custom-blocks." This plugin will encompass all the different variations of custom blocks that we will work on.
3. Run the following command to set up your plugin for the necessary npm packages. We will be using JSX, which allows you to write HTML-like code within your JavaScript code.

    ```bash
    npm init
    ```

4. We will be using `@wordpress/scripts` to compile our JSX code into plain JavaScript that a browser can understand. Let's install `@wordpress/scripts` as a development dependency with the following command:

    ```bash
    npm install @wordpress/scripts --save-dev
    ```

5. Add the following scripts in your `package.json` file that we will use to compile our JSX:

    ```json
    "start": "wp-scripts start",
    "build": "wp-scripts build"
    ```

6. Add a `.gitignore` file to exclude the `node_modules` folder. `node_modules` is where the actual dependencies are installed and should not be committed to GitHub. The dependencies can be easily reconstructed using the `package-lock.json` file.
7. Create a new directory in your plugin folder and name it `blocks`. The name is up to you and does not matter; this directory should house all your custom blocks.
8. Inside the `blocks` folder, create another folder that best represents the name of your custom block in kebab case.
9. Create a new file in this directory with the same name but using the `.js` extension. This file will contain the frontend editor script for the block.
10. If you want the block to be dynamic, create a new file in this directory using the same name but with the `.php` extension. This file will contain the `render_callback`'s HTML.
11. To the start script, add the relative path of your `.js` file and run the following command:

    ```bash
    npm run build
    ```

   This will create a `build` folder containing the compiled JavaScript files.
   
12. Set up your plugin header file and fill in the necessary details by following the file in this repository.
13. Create a new folder named `includes/inc`. This folder will contain all the necessary PHP code to maintain your blocks in the cleanest manner possible.
14. Create a new folder named `assets`. This folder will contain all third-party assets that you will use in building your custom block, such as images, CSS, jQuery, and JS.
15. Follow the file structure as presented in this repository to add static/dynamic blocks to your plugin. The details of what each file and function do are added as comments respectively.

## Links
- [Plugin Basics](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/)
- [Creating your first Block](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/)
- [Bootstrap Card Component Documentation](https://getbootstrap.com/docs/4.3/components/card/)
- [Creating Dynamic Blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/)
- [Block Controls, Toolbar, and Sidebar](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/)
- [Nested Blocks and Inner Blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/)
