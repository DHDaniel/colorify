/*
The MIT License (MIT)

Copyright (c) 2016 Daniel Hernández Hernández

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


// Author: Daniel Hernandez H.
// Date: 6 March 2016
// Insert after importing JQuery, as it REQUIRES it

// @param angle given as int, from 0 to 360 inclusive
// @param element should be given as string, ready to use JQuery style with
// $(element).function()
// parameters after element are all optional.

function Color(angle, element, sat, darkness, opacity) {

  // initial mandatory parameters set
  this.angle = angle;
  this.element = element;

  // checks whether parameter was passed
  if (sat === undefined) {
    this.saturation = 100;
  } else {
    this.saturation = sat;
  }

  if (darkness === undefined) {
    this.darkness = 50;
  } else {
    this.darkness = darkness;
  }

  if (opacity === undefined) {
    this.opacity = 1.0;
  } else {
    this.opacity = opacity;
  }

  // value flags set
  this.colorTopped = false;
  this.satTopped = false;
  this.darkTopped = false;
  this.opacityTopped = false;

  // helper function to apply changes made at the end of other functions
  this.setValues = function (background, obj) {

    var obj = obj;

    if (background) {
      $(this.element).each(function () {
        $(this).css("background-color", "hsla(" + obj.angle.toString() + "," +
                            obj.saturation.toString() + "%," + obj.darkness.toString() + "%," + obj.opacity.toString() + ")");
      });

    } else {
      $(this.element).each(function () {
        $(this).css("color", "hsla(" + obj.angle.toString() + "," +
                            obj.saturation.toString() + "%," + obj.darkness.toString() + "%," + obj.opacity.toString() + ")");
      });
    }
  }

  // Colorifies background color of element
  this.colorify = function () {
    this.angle = (this.angle + 1) % 360;
    this.setValues(true, this);
  };

  // colorifies text of element
  this.colorifyText = function () {
    this.angle = (this.angle + 1) % 360;
    this.setValues(false, this);
  };

  // takes bottom and top as integers from 0 to 360
  // background parameter optional
  this.colorifyCustom = function(bottom, top, background) {

    // default value for background
    if (background === undefined) {
      background = true;
    }

    // changes directions
    if (this.angle <= bottom) {
      this.colorTopped = false;
    } else if (this.angle >= top) {
      this.colorTopped = true;
    }

    // adds or subtracts
    if (this.colorTopped === true) {
      this.angle = this.angle - 1;
    } else {
      this.angle = this.angle + 1;
    }

    // updates values
    this.setValues(background, this);

  };

  // takes in all values as integers within their respective ranges
  this.saturify = function(bottom, top, background) {

    // default value for background
    if (background === undefined) {
      background = true;
    }

    // changes directions
    if (this.saturation <= bottom) {
      this.satTopped = false;
    } else if (this.saturation >= top) {
      this.satTopped = true;
    }

    // adds or subtracts
    if (this.satTopped === true) {
      this.saturation = this.saturation - 1;
    } else {
      this.saturation = this.saturation + 1;
    }

    // updates values
    this.setValues(background, this);

  };

  this.brightify = function(bottom, top, background) {

    // default value for background
    if (background === undefined) {
      background = true;
    }

    // changes directions
    if (this.darkness <= bottom) {
      this.darkTopped = false;
    } else if (this.darkness >= top) {
      this.darkTopped = true;
    }

    // adds or subtracts
    if (this.darkTopped === true) {
      this.darkness = this.darkness - 1;
    } else {
      this.darkness = this.darkness + 1;
    }

    // updates values
    this.setValues(background, this);
  }

  this.opacify = function(bottom, top, background) {

    // default value for background
    if (background === undefined) {
      background = true;
    }

    // changes directions
    if (this.opacity <= bottom) {
      this.opacityTopped = false;
    } else if (this.opacity >= top) {
      this.opacityTopped = true;
    }

    // adds or subtracts
    if (this.opacityTopped === true) {
      this.opacity = this.opacity - 0.01;
    } else {
      this.opacity = this.opacity + 0.01;
    }

    // updates values
    this.setValues(background, this);
  }


};
