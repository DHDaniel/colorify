
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
  this.setValues = function (background) {
    if (background) {
      $(this.element).css("background-color", "hsla(" + this.angle.toString() + "," +
                          this.saturation.toString() + "%," + this.darkness.toString() + "%," + this.opacity.toString() + ")");
    } else {
      $(this.element).css("color", "hsla(" + this.angle.toString() + "," +
                          this.saturation.toString() + "%," + this.darkness.toString() + "%," + this.opacity.toString() + ")");
    }
  }

  // Colorifies background color of element
  this.colorify = function () {
    this.angle = (this.angle + 1) % 360;
    $(this.element).css("background-color", "hsla(" + this.angle.toString() + ", 100%, 50%, 1.0)");
  };

  // colorifies text of element
  this.colorifyText = function () {
    this.angle = (this.angle + 1) % 360;
    $(this.element).css("color", "hsla(" + this.angle.toString() + ", 100%, 50%, 1.0)");
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
      this.angle = (this.angle - 1) % 360;
    } else {
      this.angle = (this.angle + 1) % 360;
    }

    // updates values
    this.setValues(background);

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
      this.saturation = (this.saturation - 1) % 100;
    } else {
      this.saturation = (this.saturation + 1) % 100;
    }

    // updates values
    this.setValues(background);

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
      this.darkness = (this.darkness - 1) % 100;
    } else {
      this.darkness = (this.darkness + 1) % 100;
    }

    // updates values
    this.setValues(background);
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
      this.opacity = (this.opacity - 0.05);
    } else {
      this.opacity = (this.opacity + 0.05) % 100;
    }

    // updates values
    this.setValues(background);
  }


};
