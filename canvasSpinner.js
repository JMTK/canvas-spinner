//For more info & demo: http://heartcode.robertpataki.com/canvasloader/

enyo.kind({
	name: "jmtk.Spinner", 
	kind: "enyo.Control",
	
	published: {
		color: "#000000", //Any HEX color works
		shape: "oval", // "oval", "spiral", "square", "rect", "roundRect"
		diameter: "90", // Values between 10-200
		density: "85", // Values between 5-160
		range: "1", // Values between 0.1 - 2
		speed: "2.5", //Values between 1-10
		fps: "30" // Values between 1-60
	},

	rendered: function() {
		this.cl = new CanvasLoader(this.hasNode().id);

		this.colorChanged();
		this.shapeChanged();
		this.diameterChanged();
		this.densityChanged();
		this.rangeChanged();
		this.speedChanged();
		this.fpsChanged();

		//Necessary because the spinner has a bug of randomly disappearing, so we override the show() and hide() functions
		this.show();
	},

	show: function() {
		this.cl.show();
		this.inherited(arguments);
	},

	hide: function() {
		this.cl.hide();
		this.inherited(arguments);
	},
	
	colorChanged: function() {
		this.cl.setColor(this.color);
	},
	
	shapeChanged: function() {
		this.cl.setShape(this.shape);
	},
	
	diameterChanged: function() {
		this.cl.setDiameter(this.diameter);
	},
	
	densityChanged: function() {
		this.cl.setDensity(this.density);
	},
		
	rangeChanged: function() {
		this.cl.setRange(this.range);
	},
		
	speedChanged: function() {
		this.cl.setSpeed(this.speed);
	},
		
	fpsChanged: function() {
		this.cl.setFPS(this.fps);
	},
});
