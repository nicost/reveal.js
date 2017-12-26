/**
 * Extensions for snap.svg that I needed
 * written by Nico Stuurman
 * Copyright Regents of the University of California, 2017-2018
 */

Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var proto = Paper.prototype,
    is = Snap.is;

  /**
   * draws a cross centered around a, y with given width
   * The two lines or the cross and the atribute is applied
   * to the group (which is returned)
   */
  proto.cross = function (x, y, width, atr) {

     var hWidth = 0.5 * width;
     var one = this.line(x - hWidth, y - hWidth, x + hWidth, y + hWidth);
     var two = this.line(x + hWidth, y - hWidth, x - hWidth, y + hWidth);
     var g = this.g(one, two);
     g.attr(atr);

     return g;
  }
});
