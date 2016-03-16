
# [LiveColor.js](#)

[LiveColor.js](#) is a simple JQuery-based plugin that adds dynamic background and font colours to your website. It is small, easy to use, and
<span style="color: red;">**_colourful_**</span> (you'll see a better demo of this in the demo page).

[LiveColor.js](#) is dead easy to use: just download it and link it to your HTML document using a `<script>` tag, that will probably look something like this:

```html
<!-- Remember to add the JQuery library first -->
<script src="path/to/JQuery-vX.XX" type="text/javascript"></script>
<script src="path/to/livecolor.js" type="text/javascript"></script>
```

Once you have done this, you're ready to get started using LiveColor in your own scripts to add some life to the colours of your site!

## How to use
As I mentioned before, using it is dead easy once you get a grasp of it. You might want to look at the demo [here](#) before reading the docs in order to understand what it does.



### The "Color" object
To begin adding pretty colours to your site, you must create a new Color object in your own script. You create them like this:
```javascript
var myColorObject = new Color(0, "#mydiv");
```
Color objects all require **two** parameters to be initialised, an **angle** and an **element**.
```javascript
var myColorObject = new Color(angle, element);
```
The parameter **angle** must be provided as an integer between 0 and 360 (a full *color wheel*) and the parameter **element** must be provided as a string, ready to use JQuery-style, like `$("#mydiv").html("Hello");`. Therefore, the **element** parameter must match the ID, the class, or the type of element that you wish to customize.
It is important to note that you must create a Color object for *each* element that you wish to apply the LiveColor effect to. If you have two divs or text areas that you want to customize, then you must create two Color objects.
It is a good idea to set the **_angle_** value as the starting colour that you want your element to be. For example, if you wanted your starting colour to be blue, then you would use a value around 240 degrees. You can look at an example of a colour wheel [here](http://www.huecode.com). Note that in this example, the angle is given next to the "H" (representing *hue*).

### Color methods

The Color object has these methods that you can implement in your scripts to add life to your site. To use these methods effectively, always nest them inside a `setInterval()` function, as shown in the following examples.

[The setInterval() function](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

---

#### Color.colorify()
This method will make your element's background colour fluctuate through all the colours of the colour wheel, giving it the appearance of a rainbow. It takes no parameters
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

#### Color.colorifyCustom( bottom, top, saturation, brightness, opacity, background)

This is probably the most useful function in the [LiveColor.js](#) plugin. It takes 6 **mandatory** parameters, all of which are necessary to provide a full custom experience. The parameters are:

* **_bottom_**: specifies the bottom angle value of the colour wheel. Must be between `0` and `360`.
* **_top_**: specifies the top angle value of the colour wheel. Must be between `0` and `360`.
* **_saturation_**: specifies the desired level of saturation. Must be an integer between `0` and `100` (it is a percentage). A value of `100` would represent the full original colour (e.g pure blue).
* **_darkness_**: specifies the brightness of the colour as a percentage, `100` being completely white and `0` completely black. A level of `50` gives normal brightness.
* **_opacity_**: specifies the transparency, given as a number between `0.0` and `1.0`. Works as you would expect, `1.0` being not transparent at all and `0.0` being fully transparent (not visible).
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
	myColorObj.colorifyCustom(180, 250, 100, 50, 1.0, true);
}, 500);
```

You can play around with all the values and the intervals at which the function executes, and have some fun!

## [Demo](#)
See the full demo with examples [here](#).
