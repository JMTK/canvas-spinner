### Enyo-2---Canvas-Spinner
========================
http://jmtk.co/#spinner
Creates a Canvas Spinner wrapper as an Enyo 2 kind


### HOW TO GET IT SET UP ###
Add `heartcode_canvas.js` to your `package.js` (Needed to render the canvas)

Add `canvasSpinner.js` to your `package.js`


Wherever you want to add your spinner, just add:
`{kind:"jmtk.Spinner"}`


### Published properties ###
Want to add cool effects?

Add these properties to your 'kind'

`color: ""` Any HEX color works

`shape: ""` "oval", "spiral", "square", "rect", "roundRect"

`speed: ""` Values between 1-10

`density: ""` Values between 5-160

`diameter: ""` Values between 10-200

`range: ""` Values between 0.1 - 2.0

`fps: ""` Values between 1-60

### Changing the spinner ###
As with any published property, just type `this.$.[SPINNER NAME].set[PROPERTY]([VALUE])`, so
for example, if my Spinner was named "spinner", and I wanted to change its speed to "4" at any point, I would type `this.$.spinner.setSpeed(4);`


### How do I see it in action? ###
Visit the canvas spinner website: http://heartcode.robertpataki.com/canvasloader/
or check out our demo: http://jmtk.co/#spinner
