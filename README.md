# easy-as-svg
Looking to add SVG to your WordPress themes and/or plugins? Easy as SVG makes it, well, easy.

Drop the file into your theme's `/inc` folder, include it from `functions.php`, change the prefixes, and away we go!

There are a few different ways of implementing SVG sprites in HTML—I’m using the method here—the first of the three methods discussed in the article. Eventually I could see adding more options to this so that you’d be able to use other methods as well, but I need to test these & play around with them further and honestly, I just picked something that worked and gave me reasonable options.:)

Currently this file has a single option, which is defined by a variable at the top of the file. (Is there a more elegant way of doing this? I feel like there must be.)

`$easy_as_svg_sprite_external = true;`

Setting this to false will use the “internal” method of sprite insertion. I’m liking external more right now because it’s a bit simpler and caches better, but internal has better native IE support and also allows you to access the SVG elements as part of the DOM—so good if you’re looking to do animation or multi-coloured icons, I’d expect. (On my list to trial next.)

# Showing icons on pages

This part is simple. In PHP (so, theme templates):

`easy_as_svg_get_icon( ‘twitter’ );`

You can pass an optional ID as the second parameter for CSS-styling or whatever:

`easy_as_svg_get_icon( ‘twitter’, ‘id’ );`

CSS classes are already applied to the SVGs output, so you can easily style them.

You can also insert the SVGs in page content using a shortcode:

`[svg-icon name=”twitter” id=”id”]`

That’s all! Those bits of code will allow you to output whatever you’d like. 

# What about social menus?

Because this method of SVG insertion doesn’t use CSS background images, it’s a bit more complicated to do a social menu. But, not impossible! By filtering `wp_nav_menu` to look for social links, we can insert SVGs for any links that match our predetermined rules. This means that users can use a footer menu for links or for social icons—the menu adapts to their content. It’s actually a pretty straightforward bit of PHP code. Text is hidden by wrapping it in a `screen-reader-text` class.

# What else is included?

- a shortcode for including standalone SVG files (I use this for logos in particular) in page content
- some SCSS code to add basic styling for certain elements (may or may not be needed, but it’s useful as a starting point at least)
- some Javascript that inserts SVGs in front of Jetpack’s sharing links (this feels like the most inelegant and fragile bit of the code, but I just wrote it today, so maybe it’ll be better in a day or two)
- svg4everybody so you can polyfill for IE as required
- a sample set of icons to get started with (will expand this momentarily; and potentially add sources as well
