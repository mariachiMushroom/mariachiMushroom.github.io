$(function() {
  'use strict';
  var bgId = 'bedsqueak';
  createjs.Sound.on('fileload', function(event) {
    var bg = createjs.Sound.play(event.id);
    bg.loop = -1;
  });

  createjs.Sound.registerSound('assets/bedsqueak2.mp3', bgId);
});