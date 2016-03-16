
// Author: Daniel Hernandez H.
// Date: 6 March 2016
// Insert after importing JQuery, as it REQUIRES it

// @param angle given as int, from 0 to 360 inclusive
// @param element should be given as string, ready to use JQuery style with
// $(element).function()
// parameters after element are all optional.

function Color(angle, element, sat, darkness, opacity) {
  this.angle = angle;
  this.element = element;

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
  this.opacity = opacity;
  this.colorTopped = false;
  this.satTopped = false;
  this.darkTopped = false;
  this.opacityTopped = false;

  // Colorifies background color of element
  this.colorify = function () {
    this.angle = (this.angle + 1) % 360;
    $(this.element).css("background-color", "hsla(" + this.angle.toString() + ", 100%, 50%, 1.0)");
  };

  this.colorifyText = function () {
    this.angle = (this.angle + 1) % 360;
    $(this.element).css("color", "hsla(" + this.angle.toString() + ", 100%, 50%, 1.0)");
  };

  // takes in all values as integers within their respective range
  this.colorifyCustom = function(bottom, top, background) {
    // changes directions
    if (this.angle == bottom) {
      this.colorTopped = false;
    } else if (this.angle == top) {
      this.colorTopped = true;
    }

    // adds or subtracts
    if (this.colorTopped == true) {
      this.angle = (this.angle - 1) % 360;
    } else {
      this.angle = (this.angle + 1) % 360;
    }

    if (background) {
      $(this.element).css("background-color", "hsla(" + this.angle.toString() + "," +
                          this.saturation.toString() + "%," + this.darkness.toString() + "%," + this.opacity.toString() + ")");
    } else {
      $(this.element).css("color", "hsla(" + this.angle.toString() + "," +
                          this.saturation.toString() + "%," + this.darkness.toString() + "%," + this.opacity.toString() + ")");
    }
  };


};
