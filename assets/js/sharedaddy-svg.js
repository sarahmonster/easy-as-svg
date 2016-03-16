/**
* These functions allow for adding SVG icons to Jetpack's Sharedaddy links.
*/

( function( $ ) {

	// Tweak the display of Jetpack sharing links.
	function addSharingIcons() {
		var $sharing = $( '.entry-footer' ).find( '.sd-sharing-enabled' );
		if ( 0 < $sharing.length ) {
			$( $( '.entry-footer .sd-sharing-enabled' ).find( 'li a' ) ).each( function( index, element ){
				var $name = $( this ).text().replace(/\s+/g, '-').toLowerCase();
				$code = '<svg class="smittenkitchen-icon smittenkitchen-icon-' + $name + '"><use xlink:href="' + svg_options.path + '/assets/svg/icons.svg#' + $name + '" /></svg>';
				$( $( this ) ).find( 'span' ).before( $code );
			} );
		}
	}

	// These functions should run as soon as possible.
	$( document ).on( 'ready', function() {
	} );

	// Run our functions once the window has loaded fully.
	$( window ).on( 'load', function() {
		addSharingIcons();
	} );

} )( jQuery );
