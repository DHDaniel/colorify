
// Author: Daniel Hernandez H.
// Date: 6 March 2016
// Insert after importing JQuery, as it REQUIRES it

// Might turn into repo

// @param angle given as int, from 0 to 360 inclusive
// @param element should be given as string, ready to use JQuery style with
// $(element).function()

function Color(angle, element) {
  this.angle = angle;
  this.element = element;
  this.topped = false;

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
  this.colorifyCustom = function(bottom, top, sat, darkness, opacity, background) {
    // changes directions
    if (angle == bottom) {
      this.topped = false;
    } else if (angle == top) {
      this.topped = true;
    }

    // adds or subtracts
    if (this.topped == true) {
      angle = (angle - 1) % 360;
    } else {
      angle = (angle + 1) % 360;
    }

    if (background) {
      $(this.element).css("background-color", "hsla(" + angle.toString() + "," +
                          sat.toString() + "%," + darkness.toString() + "%," + opacity.toString() + ")");
    } else {
      $(this.element).css("color", "hsla(" + angle.toString() + "," +
                          sat.toString() + "%," + darkness.toString() + "%," + opacity.toString() + ")");
    }
  };


};
