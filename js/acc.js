var xVal;
var yVal;

$( function() {

	var mouse = {
			start : {}
		},

		touch = document.ontouchmove !== undefined,

		acc = {

			worldX : 0,
			worldY : 0,

			world  : $( '#world' )[ 0 ],

			rotate : function( coords, target)
			{
				this[ target ].style.webkitTransform = 'rotateX(' + this[ target + 'X' ] + 'deg) rotateY(' + this[ target + 'Y' ] + 'deg)';
				this[ target ].style.MozTransform    = 'rotateX(' + this[ target + 'X' ] + 'deg) rotateY(' + this[ target + 'Y' ] + 'deg)';
			},

			moveFlat : function( coords, target ) 
			{
				this[ target ].style.webkitTransform = 'translateX(' + this[ target + 'X' ] + 'px) translateY(' + this[ target + 'Y' ] + 'px)';
				this[ target ].style.MozTransform    = 'translateX(' + this[ target + 'X' ] + 'px) translateY(' + this[ target + 'Y' ] + 'px)';
			},

			move : function( coords, func, target ) 
			{
				target = target || 'world';

				this[ target + 'X' ] = coords.x;
				this[ target + 'Y' ] = coords.y;
				
				// mix // max
				// if ( this[ target + 'X' ] <- ( $oMainBG.width * 0.094 ) ) { this[ target + 'X' ]   = -( $oMainBG.width * 0.094 ); }
				// if ( this[ target + 'X' ] >  ( $oMainBG.width * 0.026 ) ) { this[ target + 'X' ]   =  ( $oMainBG.width * 0.026 ); }
				// if ( this[ target + 'Y' ] <- ( $oMainBG.height * 0.044 ) ) { this[ target + 'Y' ]  = -( $oMainBG.height * 0.044 ); }
				// if ( this[ target + 'Y' ] >  ( $oMainBG.height * 0.1204 ) ) { this[ target + 'Y' ] =  ( $oMainBG.height * 0.1204 ); }

				switch ( func )
				{
					case 'moveFlat'   : 
						this.moveFlat( coords, target );
						break;

					case 'rotate' :
						this.rotate( coords, target );
						break;
				}
				
			},


			reset: function( target ) 
			{
				target = target || 'world';
				this.move( { x: 0, y: 0 } );
			}
		};

	window.ondevicemotion = function( event ) 
	{
		xVal = Math.round( event.accelerationIncludingGravity.x );
		yVal = Math.round( event.accelerationIncludingGravity.y );

		// acc.move( { x : acc.worldX - ( xVal * 2 ), y : acc.worldY + ( yVal * 2 ) }, 'move', 'world' );
		acc.move( { x : acc.worldX - ( xVal ), y : acc.worldY + ( yVal ) }, 'rotate', 'world' );
	};

	if ( touch )
	{
		$( '#clouds' ).css( 'display', 'none' );
	}
});