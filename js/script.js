$(document).ready( function () {

  $(".title").css("height", $(window).height() - $("nav").height());
  // Notice object creation for each colour element (class, id or element)

  // starting at a shade of pink
  // This takes care of all the elements with class ".title-coloured"
  var titleColor = new Color(300, ".title-coloured");

  var divColorify = new Color(0, "#div-colorify");

  var divColorifyText = new Color(180, "#div-colorifyText");

  var divColorifyCustom = new Color(0, "#div-colorify-custom");

  var divSaturify = new Color(0, "#div-saturify", 0);

  var divCombined = new Color(0, "#div-colorify-combine", 100, 50, 0);

  var divBackground = new Color(0, "#div-background", 100, 50, 0.3);

  var backgroundButton = new Color(180, "#download-button");



  // starting at a shade of blue
  var amazingColor = new Color(180, "#amazing-coloured");

  setInterval(function () {

    titleColor.colorifyText();

    divColorify.colorify();
    divColorifyText.colorifyText();
    divColorifyCustom.colorifyCustom(0, 120);

    amazingColor.colorifyCustom(180, 280, false);

    divSaturify.saturify(0, 100);

    divCombined.colorify();
    divCombined.opacify(0, 1.0);

    divBackground.colorify();

    backgroundButton.colorifyCustom(180, 280);

  }, 100);


});
