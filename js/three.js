
//variables
var AJAX,
	titleOpen = true,
	cpuTimer  = [],
	cpuTimerIndex = -21,
	windowDimentions,
	device,
	$iLRBorder,

	mouseRotate = false,

	threeDeeMove = { 
		x : 0,
		xRotation : 0,
		y : 0,
		yRotation : 0,
		z : 0,
		zRotation : 0,
		speed : 0
	},

	threeDeeMoveConst = { 
		x : 0,
		xRotation : 0,
		y : 0,
		yRotation : 0,
		z : 0,
		zRotation : 0,
		speed : 0
	},

	threeDeeSpot = {
		x : 0,
		xRotation : 0,
		y : 0,
		yRotation : 0,
		z : 0,
		zRotation : 0,
		speed : 0
	},
	
	currentLocation = {
		x : 0,
		xRotation : 0,
		y : 0,
		yRotation : 0,
		z : 0,
		zRotation : 0,
		speed : 0
	},

	t 			= '',
	layers      = [],
	objects     = [],
	world       = document.getElementById( 'world' ),
	viewport    = document.getElementById( 'viewport' ),
	worldClouds = document.getElementById( 'clouds' ),
	
	move = {},

	css = {},

	content = {},

	nav = {};

// standard sizes
var $oMainBG = {
	width   : 1200,
	height  : 800,
	depth   : 600,
	xOffset : 0,
	yOffset : 0,
	zOffset : 0
};

var divs = {};

// var divs = {

// 	side1 : {
// 		element : document.getElementById( 'side1' ).style,
// 		x : -0.245,
// 		xRotation : 90,
// 		y : 0.23,
// 		yRotation : 0,
// 		z : -0.135,
// 		zRotation : 0,
// 		scale : 1,
// 		width : 0.31,
// 		height : 0.2,
// 		bgColor : [ 0,0,0,1 ] 
// 	},

// 	side2 : {
// 		element : document.getElementById( 'side2' ).style,
// 		x : -0.245,
// 		xRotation : 90,
// 		y : 0.23,
// 		yRotation : 0,
// 		z : -0.135,
// 		zRotation : 0,
// 		scale : 1,
// 		width : 0.31,
// 		height : 0.2,
// 		bgColor : [ 0,0,0,1 ] 
// 	},

// 	side3 : {
// 		element : document.getElementById( 'side3' ).style,
// 		x : -0.245,
// 		xRotation : 90,
// 		y : 0.23,
// 		yRotation : 0,
// 		z : -0.135,
// 		zRotation : 0,
// 		scale : 1,
// 		width : 0.31,
// 		height : 0.2,
// 		bgColor : [ 0,0,0,1 ] 
// 	},

// 	side4 : {
// 		element : document.getElementById( 'side4' ).style,
// 		x : -0.245,
// 		xRotation : 90,
// 		y : 0.23,
// 		yRotation : 0,
// 		z : -0.135,
// 		zRotation : 0,
// 		scale : 1,
// 		width : 0.31,
// 		height : 0.2,
// 		bgColor : [ 0,0,0,1 ] 
// 	},

// 	top : {
// 		element : document.getElementById( 'top' ).style,
// 		x : -0.245,
// 		xRotation : 90,
// 		y : 0.23,
// 		yRotation : 0,
// 		z : -0.135,
// 		zRotation : 0,
// 		scale : 1,
// 		width : 0.31,
// 		height : 0.2,
// 		bgColor : [ 0,0,0,1 ] 
// 	},

// 	bottom : {
// 		element : document.getElementById( 'bottom' ).style,
// 		x : -0.245,
// 		xRotation : 90,
// 		y : 0.23,
// 		yRotation : 0,
// 		z : -0.135,
// 		zRotation : 0,
// 		scale : 1,
// 		width : 0.31,
// 		height : 0.2,
// 		bgColor : [ 0,0,0,1 ] 
// 	}
// };

var building = {

	side1 : {
		element:document.getElementById( 'side1' ).style,
		x : 0.2373,
		xRotation : 0, 
		y : 0.3787,
		yRotation : 0,
		z : -0.1401,
		zRotation : 0,
		scale : 0.75
	},

	side2: {
		element : document.getElementById( 'side2' ).style,
		x : 0.2373,
		xRotation : 90, 
		y : 0.2615,
		yRotation : 0,
		z : 0.0151,
		zRotation : 0,
		scale : 0.75
	},

	side3 : {
		element : document.getElementById( 'side3' ).style,
		x : 0.2373,
		xRotation : 90, 
		y : 0.4959,
		yRotation : 0,
		z : 0.0151,
		zRotation : 0,
		scale : 0.75
	},

	side4 : {
		element : document.getElementById( 'side4' ).style,
		x : 0.2373,
		xRotation : 0, 
		y : 0.3787,
		yRotation : 0,
		z : 0.1701,
		zRotation : 0,
		scale : 0.75
	},

	top : {
		element : document.getElementById( 'top' ).style,
		x : 0.28,
		xRotation : 0, 
		y : 0.3787,
		yRotation : 0,
		z : 0.0151,
		zRotation : 0,
		scale : 0.75
	},

	bottom : {
		element : document.getElementById( 'bottom' ).style,
		x : 0.185,
		xRotation : 0, 
		y : 0.3787,
		yRotation : 90,
		z : 0.0151,
		zRotation : 90,
		scale : 0.75
	},

	title : {
		element : document.getElementById( 'title' ).style,
		x : 0.26,
		xRotation : 245,
		y : 0.3593,
		yRotation : 0,
		z : 0.0469,
		zRotation : 0,
		scale : 0.75
	}
};


var position = {

	home : {

		spot : {
			x : 108,
			xRotation : 10,
			y : 115,
			yRotation : 25,
			z : 90,
			zRotation : 0,
			speed : 0
		},

		window : {
			url : 'reset',
			loadFunction : 'reset',
			width : 0,
			height : 0,
			top : 0,
			left : 0,
			id : 'home'
		},

		title:'home',
		url:'/'
	}
};



// requestAnimation
( function() {
	var lastTime = 0;
	var vendors  = [ 'ms', 'moz', 'webkit', 'o' ];

	for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x ) 
	{
		window.requestAnimationFrame       = window[ vendors[ x ] + 'RequestAnimationFrame' ];
		window.cancelRequestAnimationFrame = window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
	}

	if ( !window.requestAnimationFrame )
	{
		window.requestAnimationFrame = function( callback, element ) 
		{
			var currTime   = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );

			var id         = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );

			lastTime       = currTime + timeToCall;

			return id;
		};
	}

	if ( !window.cancelAnimationFrame )
	{
		window.cancelAnimationFrame = function( id ) 
		{
			clearTimeout( id );
		};
	}
}());

//view
var view = {

	/**
     * Update View
     * 
     * updates the view position
     * 
     * @return  void
     */
	update : function( target )
	{
		target = target || document.getElementById( 'world' );

		target = $( target );

		var t = 'translateX(' + currentLocation.x + 'px ) ';
		   t += 'translateY(' + currentLocation.y + 'px ) ';
		   t += 'translateZ(' + currentLocation.z + 'px ) ';
		   t += 'rotateX(' + currentLocation.xRotation + 'deg ) ';
		   t += 'rotateY(' + currentLocation.yRotation + 'deg ) ';
		   t += 'rotateZ(' + currentLocation.zRotation + ')';

		target.css( 'webkitTransform', 	t );
		target.css( 'MozTransform', 	t );
		target.css( 'oTransform', 		t );

		requestAnimationFrame( move.faceFront );
	},


	/**
     * Detect View
     * 
     * detects the viewport
     * 
     * @return  viewport object { viewWidth, viewHeight }
     */
	detect : function()
	{
		var viewportWidth  = $( window ).width();
		var viewportHeight = $( window ).height();

		return { 
			'viewWidth'  : viewportWidth, 
			'viewHeight' : viewportHeight
		};
	},


	/**
     * Set Perspective
     * 
     * sets the 3d perspective
     *
     * @param 	p 		integer 		desired perspective
     * 
     * @return  void
     */
	setPerspective : function( p )
	{
		viewport.style.webkitPerspective = p;
		viewport.style.MozPerspective    = p;
		viewport.style.oPerspective  	 = p;
	},


	/**
     * Main Init
     * 
     * starts the 3d-ness
     * 
     * @return  void
     */
	init : function()
	{
		windowDimentions = view.detect();
		css.init();
	},


	 /**
     * toggle title
     * 
     * toggles the title on and off does not affect #titleFirst
     * 
     * @param target 	string 			can specify special instructions
     *
     * @return  void
     */
	toggleTitle : function( target )
	{
		if ( ( target === 'reset' ) || ( titleOpen === false ) )
		{
			$( '#titleFirst' ).css( 'display', 'none' );
			$( '#title' 		).css( 'display', 'block' );
			$( '#title' 		).css( 'opacity', '1' );
			titleOpen = false;
		}
		else
		{
			$( '#titleFirst' ).css( 'display', 'block' );
			$( '#title'      ).css( 'display', 'none' );
			titleOpen = false;
		}
	}
};


/**
 * Clouds!
 * 
 * all the functions relating to the clouds
 * 
 * @return  void
 */
var cloudsLive = {

	create : function()
	{
		var div = document.createElement( 'div'  );
		div.className = 'cloudBase';

		var x = ( Math.random() ) - 100;
		var y = ( Math.random() ) - 400;
		var z = ( Math.random() ) + 350;

		t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';
		div.style.webkitTransform = t;
		div.style.MozTransform   = t;
		div.style.oTransform     = t;

		worldClouds.appendChild( div );

		for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ )
		{
			x = Math.random() * $oMainBG.width  - ( $oMainBG.width * 0.3 );
			y = Math.random() * $oMainBG.height - ( $oMainBG.height * 1.1 );
			z = ( Math.random() * 1000 ) - 750;
			var a = Math.random() * 360;
			var s = 0.25 + Math.random();

			if ( y < ( 0.1 * $oMainBG.height ) )
			{
				y = 0.15 * $oMainBG.height;
			}

			if ( y< ( 0.5 * $oMainBG.height ) )
			{
				var cloud = document.createElement( 'img' );
				cloud.style.opacity = 0;

				var src = 'img/cloud.png';

				( function( img ) { img.addEventListener( 'load', function() {
					img.style.opacity = 0.8;
				} ) } )( cloud );

				cloud.setAttribute( 'src', src );
				cloud.className = 'cloudLayer';
				cloud.data = {
					x: x,
					y: y,
					z: z,
					a: a,
					s: s,
					speed: 0.1 * Math.random()
				};

				t  = 'translateX(' + x + 'px ) ';
				t += 'translateY(' + y + 'px ) ';
				t += 'translateZ(' + z + 'px ) ';
				t += 'rotateZ(' + a + 'deg ) ';
				t += 'scale(' + s + ')';

				cloud.style.webkitTransform = t;
				cloud.style.MozTransform    = t;
				cloud.style.oTransform      = t;

				div.appendChild( cloud );
				layers.push( cloud );
			}
		}
		return div;
	},


	generate : function()
	{
		objects = [];

		if ( worldClouds.hasChildNodes() ) 
		{
			while ( worldClouds.childNodes.length >= 1 )
			{
				worldClouds.removeChild( worldClouds.firstChild );
			}
		}

		for( var j = 0; j < 5; j++ )
		{
			objects.push( cloudsLive.create() );
		}
	}
};



// animation
var move = {

	reset : function()
	{
		currentLocation = {
			x : 0,
			xRotation : 0,
			y : 0,
			yRotation : 0,
			z : 0,
			zRotation : 0
		};
		
		view.update();
	},
	
	faceFront : function()
	{
		var frontFacing = {
			title : '',
			top : ''
		};
		
		for ( var part in frontFacing )
		{
			t  = 'translateX(' + ( ( building[ part ].x * $oMainBG.width ) + $oMainBG.xOffset ) + 'px ) ';
			t += 'translateY(' + ( ( building[ part ].y * $oMainBG.height ) + $oMainBG.yOffset ) + 'px ) ';
			t += 'translateZ(' + ( ( building[ part ].z * $oMainBG.depth ) + $oMainBG.zOffset ) + 'px ) ';
			t += 'rotateX(' + ( ( -currentLocation.xRotation / 2 ) + ( building [ part].xRotation * $oMainBG.depth ) ) + 'deg ) ';
			t += 'rotateY(' + ( -currentLocation.yRotation + ( building[ part ].yRotation * $oMainBG.depth ) ) + 'deg ) ';
			t += 'rotateZ(' + ( -currentLocation.zRotation + ( building[ part ].zRotation * $oMainBG.depth ) ) + 'deg ) ';
			t += 'scale(' + building[ part ].scale + ')';

			building[ part ].element.webkitTransform = t;
			building[ part ].element.MozTransform    = t;
			building[ part ].element.oTransform      = t;
		}
	},


	spin:function()
	{
		for( var j = 0; j < layers.length; j++ )
		{
			var layer = layers[ j ];
			layer.data.a += layer.data.speed;
			t  = 'translateX(' + layer.data.x + 'px ) ';
			t += 'translateY(' + layer.data.y + 'px ) ';
			t += 'translateZ(' + layer.data.z + 'px ) ';
			t += 'rotateY(' + ( -currentLocation.yRotation ) + 'deg ) ';
			t += 'rotateX(' + ( -currentLocation.xRotation ) + 'deg ) ';
			t += 'rotateZ(' + layer.data.a + 'deg ) ';
			t += 'scale(' + ( layer.data.s * ( $oMainBG.width / 1200 ) ) + ')';

			layer.style.webkitTransform = t;
			layer.style.MozTransform    = t;
			layer.style.oTransform      = t;
		}

		requestAnimationFrame( move.spin );
	},


	increment : function( threeDeeMove, threeDeeMoveConst )
	{
		for ( var measurement in threeDeeMove )
		{
			if (measurement !== 'speed' )
			{
				if ( Math.abs( threeDeeMove[ measurement ] ) < 1 )
				{
					threeDeeMove[ measurement ] = 0;
				}
				else
				{
					threeDeeMove[ measurement ] = Math.round( threeDeeMove[ measurement ] * 10 ) / 10;
				}
				if ( threeDeeMove[ measurement ] !== 0 )
				{
					threeDeeMove[ measurement ] = threeDeeMove[ measurement ] - threeDeeMoveConst[ measurement ];
					currentLocation[ measurement ] = Math.round( ( currentLocation[ measurement ] - threeDeeMoveConst[ measurement ] ) * 10 ) / 10;
				} 
			}
		}

		view.update();

		if ( cpuTimerIndex >= -20 )
		{
			cpuTimerIndex = cpuTimerIndex - 1;
			var percent = 100 - cpuTimerIndex;

			if (percent > 100)
			{
				percent = 100;
			}
			var $loading = $( '#loading' );
			
			$loading.html( percent + '%' );
			$loading.css( 'opacity', ( ( 100 - percent ) / 100 ) );

			if ( ( cpuTimerIndex % 5 === 0 ) && ( cpuTimerIndex < 71 ) && ( cpuTimerIndex >= ( -10 ) ) )
			{
				cpuTimer.push(Date.now());
			}

			if ( cpuTimerIndex === 10 )
			{
				document.getElementById( 'foreground' ).style.opacity = 0;
				document.getElementById( 'viewport' ).style.opacity = 1;
			}

			if ( cpuTimerIndex === -10 )
			{
				document.getElementById( 'foreground' ).innerHTML = '';
				CPUTest.test( cpuTimer );
			}
		}

		if ( (threeDeeMove.x === 0 ) && ( threeDeeMove.xRotation === 0 ) &&
			( threeDeeMove.y === 0 ) && ( threeDeeMove.yRotation === 0 ) &&
			( threeDeeMove.z === 0 ) && ( threeDeeMove.zRotation === 0 ) )
		{
			return 0;
		}
		else
		{
			setTimeout( move.increment, threeDeeMove.speed, threeDeeMove, threeDeeMoveConst );
		}
	},


	initIncrement : function( threeDeeMove )
	{
		var x = 0;

		for ( var measurement in threeDeeMove ) 
		{
			if ( Math.abs( threeDeeMove[ measurement ] ) > x )
			{
				x = Math.abs( threeDeeMove[ measurement ] );
			}
			
			threeDeeMoveConst[ measurement ] = ( threeDeeMove[ measurement ] / x );
		}

		this.increment( threeDeeMove, threeDeeMoveConst );
	},


	initSpot : function( threeDeeSpot )
	{
		for ( var measurement in threeDeeMove ) 
		{
			threeDeeMove[ measurement ] = threeDeeSpot[ measurement ] + currentLocation[ measurement ];
		}

		threeDeeMove.speed = threeDeeSpot.speed;
		this.initIncrement( threeDeeMove );
	}
};


// build css
var css = {

	init : function()
	{
		view.setPerspective( windowDimentions.viewWidth * 0.65 );

		$iLRBorder = 0;

		$oMainBG.xOffset = windowDimentions.viewWidth * 0.075;

		document.getElementById( 'left' ).style.display  = 'none';
		document.getElementById( 'right' ).style.display = 'none';
		document.getElementById( 'body' ).style.fontSize = '1em';

		if ( $iLRBorder > ( windowDimentions.viewWidth * 0.1 ) )
		{
			$iLRBorder = windowDimentions.viewWidth * 0.1;
		}

		this.set();
	},


	set : function()
	{
		//set borders
		world.style.width  = $oMainBG.width;
		world.style.height = $oMainBG.height;
		world.style.left   = -( $oMainBG.width * 0.025 ) + 'px';

		document.getElementById( 'left' ).style.width    = $iLRBorder + 'px';
		document.getElementById( 'left' ).style.height   = windowDimentions.viewHeight + 'px';
		document.getElementById( 'right' ).style.width   = $iLRBorder + 'px';
		document.getElementById( 'right' ).style.height  = windowDimentions.viewHeight + 'px';
		document.getElementById( 'viewport' ).style.left = $iLRBorder + 'px';

		for ( var part in divs )
		{
			divs[ part ].element.width 			 = ( divs[ part ].width * $oMainBG.width ) + 'px';
			divs[ part ].element.height 		 = ( divs[ part ].height * $oMainBG.height ) + 'px';
			divs[ part ].element.backgroundColor = divs[ part ].bgColor;

			this.build( divs[ part ] );
		}

		for ( part in building )
		{
			this.build( building[ part ] );
		}

	},


	build : function( part )
	{
		t  = 'translateX(' + ( ( part.x * $oMainBG.width ) + $oMainBG.xOffset ) + 'px) ';
		t += 'translateY(' + ( ( part.y * $oMainBG.height ) + $oMainBG.yOffset ) + 'px) ';
		t += 'translateZ(' + ( ( part.z * $oMainBG.depth ) + $oMainBG.zOffset) + 'px) ';
		t += 'rotateY(' + ( currentLocation.yRotation - part.yRotation ) + 'deg) ';
		t += 'rotateX(' + ( currentLocation.xRotation - part.xRotation ) + 'deg) ';
		t += 'rotateZ(' + part.zRotation + 'deg) ';
		t += 'scale(' + ( part.scale * ( $oMainBG.width / 1200 ) ) + ')';
		
		part.element.webkitTransform = t;
		part.element.MozTransform    = t;
		part.element.oTransform      = t;
	}
};


// content management/AJAX
var content = {
	getAJAX : function( url, callback )
	{
		"use strict";

		AJAX = new XMLHttpRequest( );

		AJAX.onreadystatechange = function () 
		{
			if ( AJAX.readyState === 4 ) 
			{
				if ( AJAX.status === 200 ) 
				{
					callback( AJAX );
				}
				else if ( AJAX.status === 404 ) 
				{
					console.log( '404. file not found.' );
				}
				else 
				{
					console.log( 'Unknown AJAX error. error code ' + AJAX.status );
				}
			}
		};

		AJAX.open( 'GET', url, true );

		AJAX.send();
	},


	insert : function( $sTarget, $sURL )
	{
		this.getAJAX( $sURL, function()
		{
			document.getElementById( $sTarget ).innerHTML = AJAX.responseText;
		});
	},


	back : function( target )
	{
		nav( target );
	},


	forward : function( target )
	{
		target = position[ target ];
		history.pushState( target, target.title, target.url );
		nav( target );
	},
	load : function( $oContent )
	{
		var display = {

			reset : function()
			{
				document.getElementById( 'content' ).style.opacity = 0;
			},


			info : function()
			{
				document.getElementById( 'content' ).style.display = 'block';
				content.insert( 'content', 'application/php/navLoader.php?url=' + $oContent.url );
				document.getElementById( 'content' ).style.opacity = 1;
				document.getElementById( 'content' ).innerHTML    = '<div class="ajax-loader"></div>';
				document.getElementById( 'content' ).style.width  = ( $oMainBG.width * $oContent.width ) + 'px';
				document.getElementById( 'content' ).style.height = ( $oMainBG.height * $oContent.height ) + 'px';
				document.getElementById( 'content' ).style.top    = ( $oMainBG.height * $oContent.top ) + 'px';
				document.getElementById( 'content' ).style.left   = ( $oMainBG.width * $oContent.left ) + 'px';
			}
		};

		display.reset();
		display[ $oContent.loadFunction]();
		view.toggleTitle( $oContent.url );
	}
};


var nav = function( target )
{
	move.initSpot( target.spot );
	content.load( target.window );
};


var CPUTest = {

	start : function()
	{
		cpuTimerIndex = 100;
	},


	test : function( times )
	{
		for ( var j = 0; j < times.length - 1; ++j )
		{
			times[ j ] = times [ j + 1 ] - times[ j ];
		}

		times.splice( times.length - 1, 1 );

		var averageCPU = 0;
		for ( j = 0; j < times.length; ++j )
		{
			averageCPU = averageCPU + times[ j ];
		}

		averageCPU = averageCPU / times.length;
console.log( averageCPU );
		if ( averageCPU > 135 )
		{
			console.log( 'slow computer' );
			// window.location = 'somewhere else';
		}

		averageCPU    = 0;
		cpuTimerIndex = -50;
	}
};


$( document ).ready( function() {

	$( window ).bind( 'popstate', function( event ) 
	{
		var state = event.originalEvent.state;

		if ( state !== null ) 
		{
			content.back( state );
		}
	});


	/// mouse events
	
	var onContainerMouseWheel = function( event ) 
	{
		event = event ? event : window.event;
		currentLocation.z = currentLocation.z - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );

		view.update();
	};

	window.addEventListener( 'mousewheel', onContainerMouseWheel );
	
	window.addEventListener( 'DOMMouseScroll', onContainerMouseWheel );
	
	window.addEventListener( 'mousemove', function( e ) 
	{
		if ( mouseRotate === true )
		{
			currentLocation.yRotation = currentLocation.yRotation - ( 0.5 - ( e.clientX / window.innerWidth ) ) * 2;
			currentLocation.xRotation = currentLocation.xRotation + ( 0.5 - ( e.clientY / window.innerHeight ) ) * 2;

			view.update();
		}
	});

	window.addEventListener( 'keydown', function( e ) 
	{
		if ( e.keyCode === 32 )
		{
			if ( mouseRotate === true )
			{
				mouseRotate = false;
			}
			else
			{
				mouseRotate = true;
			}
		}

	});

	move.spin();

	view.init();

	cloudsLive.generate();

	CPUTest.start();

	move.initSpot( position.home.spot );
});


