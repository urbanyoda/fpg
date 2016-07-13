(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.welcome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ASxDMQglgVgWglQgWgmAAgxIAAgCQAAguAUgkQAUglAjgXQAkgXAuAAQAzAAAiAZQAiAXASAnQARAlAAAvIAAAKIgBALIjtAAQAHAnAZAVQAZAVAkAAQAbAAAUgKQAWgJASgTIArAmQgWAcggAQQghAQgsAAQgvAAglgVgATEgYQgWAXgFAkIClAAQgDgYgKgRQgJgTgSgLQgRgLgYAAQgjAAgWAXgADhDLQgmgWgWgmQgWglgBgvIAAgBQABgvAWgkQAWglAmgXQAngXAyAAQAxAAAnAXQAnAWAVAmQAWAjAAAvIAAABQAAAugWAmQgWAmgnAXQgmAWgzAAQgxAAgmgWgAEGgdQgWANgMAVQgMAXAAAdIAAABQAAAcANAYQAMAXAWAOQAWAOAdAAQAeAAAWgOQAVgOAMgWQAMgYAAgcIAAgBQAAgdgMgXQgNgWgWgNQgWgOgeAAQgdAAgVAOgAh6DLQgmgWgVgmQgWglAAgvIAAgBQAAguAWgkQAVgmAmgXQAlgXAxAAQArAAAeAPQAfAPAWAaIguAwQgQgRgUgMQgSgKgbAAQgbAAgVAOQgVANgLAVQgMAXgBAdIAAABQABAdAMAYQAMAXAWANQAVAOAdAAQAaAAASgLQAUgKARgTIAsAsQgXAbgeARQgfAQgtAAQgwAAglgWgAqXDMQgmgVgVglQgWgmgBgxIAAgCQABguAUgkQAUglAjgXQAjgXAuAAQA0AAAiAZQAiAXASAnQARAlAAAvIAAAKIgCALIjsAAQAHAnAZAVQAZAVAkAAQAaAAAVgKQAVgJATgTIArAmQgXAcggAQQggAQgtAAQgvAAgkgVgAqEgYQgWAXgFAkIClAAQgDgYgKgRQgKgTgSgLQgRgLgYAAQgiAAgWAXgAvwDdIhpkwIhoEwIhBAAIiUmrIBQAAIBmE6IBpk7IA/AAIBpE7IBmk6IBOAAIiUGrgAPPDaIAAi2QAAglgRgUQgRgUgfAAQgfAAgTAVQgSAUgBAlIAAC1IhKAAIAAi3QAAgkgRgTQgRgVgfAAQgfABgSAVQgTATgBAmIAAC0IhJAAIAAk/IBJAAIAAAxQALgPANgNQANgMASgIQATgIAYAAQAjAAAYAPQAYAQANAaQATgaAbgQQAagPAlAAQA1AAAdAgQAeAgAAA5IAADNgAlkDaIAAm6IBLAAIAAG6g");
	this.shape.setTransform(101.2,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-6.6,286.4,45.2);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,50,50);


(lib.bigbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box6
	this.box6 = new lib.box();
	this.box6.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.box6).wait(1));

	// box5
	this.box5 = new lib.box();
	this.box5.setTransform(25,25);
	this.box5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 102, 0, 0)];
	this.box5.cache(-52,-52,54,54);

	this.timeline.addTween(cjs.Tween.get(this.box5).wait(1));

	// box4
	this.box4 = new lib.box();
	this.box4.setTransform(25,25);
	this.box4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 0)];
	this.box4.cache(-52,-52,54,54);

	this.timeline.addTween(cjs.Tween.get(this.box4).wait(1));

	// box3
	this.box3 = new lib.box();
	this.box3.setTransform(25,25);
	this.box3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 153, 0, 0)];
	this.box3.cache(-52,-52,54,54);

	this.timeline.addTween(cjs.Tween.get(this.box3).wait(1));

	// box2
	this.box2 = new lib.box();
	this.box2.setTransform(25,25);
	this.box2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 51, 51, 255, 0)];
	this.box2.cache(-52,-52,54,54);

	this.timeline.addTween(cjs.Tween.get(this.box2).wait(1));

	// box1
	this.box1 = new lib.box();
	this.box1.setTransform(25,25);
	this.box1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 0, 153, 0)];
	this.box1.cache(-52,-52,54,54);

	this.timeline.addTween(cjs.Tween.get(this.box1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.welcome.alpha = 0;
		
		var ctrl = new ScrollMagic.Controller({
		    globalSceneOptions: {
		        
		    }
		  });
		  
		
		  var tl = new TimelineMax();
		
		  tl
		      .to(root.bigbox, 1, {rotation:360*6, x:300})
			  .to(root.bigbox, 1, {y:"-=200"})
			  .addLabel("start")
			  .to(root.bigbox.box1, 1, {rotation:300}, "start")
			  .to(root.bigbox.box2, 1, {rotation:240}, "start") 
			  .to(root.bigbox.box3, 1, {rotation:180}, "start")
			  .to(root.bigbox.box4, 1, {rotation:120}, "start") 
			  .to(root.bigbox.box5, 1, {rotation:60}, "start") 
			  .to(root.bigbox.box6, 1, {rotation:0}, "start")
			  .to(root.bigbox, 1, {x:"-=200"}, "start")
			  .to(root.welcome, 0.5, {alpha:1, y:"-=30"})
		
		  var scene = new ScrollMagic.Scene({
		      triggerElement: '#spacer1',
		      triggerHook:0,
		      duration:'30%'
		  })
		  .setTween(tl)
		  .addTo(ctrl);
		  
		function scale(mc, nw) {
			factor = nw / mc.nominalBounds.width;
			mc.scaleX = mc.scaleY = factor;
		}
		
		//scale(root.bigbox, 250);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.welcome = new lib.welcome();
	this.welcome.setTransform(368.8,221,1,1,0,0,0,101.2,16);

	this.timeline.addTween(cjs.Tween.get(this.welcome).wait(1));

	// box
	this.bigbox = new lib.bigbox();
	this.bigbox.setTransform(-26.9,375);

	this.timeline.addTween(cjs.Tween.get(this.bigbox).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(248.1,398.4,563.9,201.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;