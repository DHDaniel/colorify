
# [LiveColor.js](http://dhdaniel.github.io/livecolor/)

[LiveColor.js](http://dhdaniel.github.io/livecolor/) is a simple JQuery-based plugin that adds dynamic background and font colours to your website. It is small, easy to use, and
<span style="color: red;">**_colourful_**</span> (you'll see a better demo of this in the demo page).

[LiveColor.js](http://dhdaniel.github.io/livecolor/) is dead easy to use: just download it and link it to your HTML document using a `<script>` tag, that will probably look something like this:

```html
<!-- Remember to add the JQuery library first -->
<script src="path/to/JQuery-vX.XX" type="text/javascript"></script>
<script src="path/to/livecolor-vX.XX.js" type="text/javascript"></script>
```

Once you have done this, you're ready to get started using LiveColor in your own scripts to add some life to the colours of your site!

## How to use
As I mentioned before, using it is dead easy once you get a grasp of it. You might want to look at the demo [here](http://dhdaniel.github.io/livecolor/) before reading the docs in order to understand what it does.



### The "Color" object
To begin adding pretty colours to your site, you must create a new Color object in your own script. You create them like this:
```javascript
var myColorObject = new Color(0, "#mydiv");
```
Color objects all require **two** parameters to be initialised, an **angle** and an **element**. The rest of the parameters are optional, but necessary if you wish to use all the methods offered effectively. Optional parameters are <span style="color: red;">saturation, darkness and opacity.</span>
```javascript
var myColorObject = new Color(angle, element, saturation, darkness, opacity);
```
The parameter **angle** must be provided as an integer between 0 and 360 (a full *color wheel*) and the parameter **element** must be provided as a string, ready to use JQuery-style, like `$("#mydiv").html("Hello");`. Therefore, the **element** parameter must match the ID, the class, or the type of element that you wish to customize.
It is important to note that you must create a Color object for *each* element that you wish to apply the LiveColor effect to. If you have two divs or text areas that you want to customize, then you must create two Color objects.
It is a good idea to set the **_angle_** value as the starting colour that you want your element to be. For example, if you wanted your starting colour to be blue, then you would use a value around 240 degrees. You can look at an example of a colour wheel [here](http://www.huecode.com). Note that in this example, the angle is given next to the "H" (representing *hue*).  
The same applies for the optional parameters - they should be set at the starting value that is desired. For the optional parameters: the **saturation** parameter should be a value between 0 and 100 (by default, it is 100), the **darkness** parameter should be a value between 0 and 100 (by default, it is 50) and the **opacity** parameter should be a value between 0.0 and 1.0 (by default, is is 1.0, or "not transparent at all"). For example, this is how you would construct a Color object using all the parameters:
```javascript
var myColorObject = new Color(0, "#mydiv", 80, 50, 0.8);
```

### Color methods

The Color object has these methods that you can implement in your scripts to add life to your site. To use these methods effectively, always nest them inside a `setInterval()` function, as shown in the following examples.

[The setInterval() function](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

---

#### Color.colorify()
This method will make your element's background colour fluctuate through all the colours of the colour wheel, giving it the appearance of a rainbow. It takes no parameters. Note that if you are going to use the **colorify()** method, it is pointless to create an object with all the optional parameters as they will be overridden by the method.
```javascript
// initialise Color object outside the interval function
var myColorObj = new Color(0, "#mydiv");

// interval function to repeatedly execute colorify
// function executes every 500 miliseconds
setInterval(function () {
	myColorObj.colorify();
}, 500);
```

---

#### Color.colorifyText()
This method is used just as the previous example, with the only difference being that it colorifies text, not background colour. It takes no parameters.

```javascript
// initialise Color object outside the interval function
var myColorObj = new Color(0, "#mydiv");

// interval function to repeatedly execute colorifyText()
// function executes every 500 miliseconds
setInterval(function () {
	myColorObj.colorifyText();
}, 500);
```

---

#### Color.colorifyCustom( bottom, top, background = true)

This is probably the most useful function in the [LiveColor.js](#) plugin. It takes 2 **mandatory** parameters, and one that is optional (set by default to *true*). The parameters are:

* **_bottom_**: specifies the bottom angle value of the colour wheel. Must be between `0` and `360`.
* **_top_**: specifies the top angle value of the colour wheel. Must be between `0` and `360`.
* **_background_**: given as a boolean value, it specifies whether the background colour is being changed, or the text colour. A value of `true` would mean the background colour will be changed.

In use:
```javascript
// initialise Color object outside the interval function
// initialised at angle 180 to fluctuate between different shades of blue.
var myColorObj = new Color(180, "#mydiv");

// interval function to repeatedly execute colorifyCustom()
// This will make the "#mydiv" element's background fluctuate through different shades of blue
// function executes every 500 miliseconds
setInterval(function () {
	myColorObj.colorifyCustom(180, 250);
}, 500);
```
Note that the optional parameter **background** is not provided, as we want to colorify the background. However, if we wanted to colorify the text, then we would use `myColorObj.colorifyCustom(180, 250, false);` instead.
You can play around with all the values and the intervals at which the function executes, and have some fun!  

The following functions are *very similar to the previous one*. They all take the **same** parameters **(bottom, top, background)**, only they represent different things.

#### Color.saturify(bottom, top, background = true)
Parameters *bottom* and *top* must be between 0 and 100. This function will make the element's saturation level fluctuate according to the bottom and top parameters.
```javascript
// initialise Color object outside the interval function
// initialised at angle 180 to fluctuate between different shades of blue.
// Note that the saturation parameter is passed
var myColorObj = new Color(180, "#mydiv", 80);

// interval function to repeatedly execute colorifyCustom()
// This will make the "#mydiv" element's background fluctuate through different shades of blue
// function executes every 500 miliseconds
setInterval(function () {
	// fluctuates colour
	myColorObj.colorifyCustom(180, 250);
    // fluctuates saturation
    myColorObj.saturify(40, 80);
}, 500);
```
**IMPORTANT NOTE:** when passing optional parameters to the Color object, you must take care. If you want to pass the optional parameter *saturation* without passing the rest, then the above code is valid. However, if you wanted to create an object and only modify the opacity, **you must pass all the other parameters as well**. In other words, you must explicitly provide all the other default values.
```javascript
// This is the proper way to do it, supplying the defaults explicitly.
var myColorObj = new Color(0, "#mydiv", 100, 50, 0.8);

// This will NOT work, as the program will think that 0.8 corresponds to saturation (as saturation is the first optional parameter).
var myColorObj = new Color(0, "#mydiv", 0.8);
```

#### Color.brightify(bottom, top, background = true)

This method works the same as the one above, and the parameters are in the same range - bottom and top must be between 0 and 100. The method will fluctuate the brightness of the element.

#### Color.opacify(bottom, top, background = true)

This method works the same as the one above, but the parameters must be between 0 and 1.0. The method fluctuates the opacity/transparency of the element.

## [Demo](http://dhdaniel.github.io/livecolor/)

See the full demo with examples [here](http://dhdaniel.github.io/livecolor/).
