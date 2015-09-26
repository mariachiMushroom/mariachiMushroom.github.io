$(function() {
  var MORTY_FILES = ['mortyclimax.mp3', 'mortyexhale1.mp3'];

  'use strict';
  var bgId = 'bedsqueak';
  createjs.Sound.on('fileload', function(event) {
    var bg = createjs.Sound.play(event.id);
    console.log(bg);
    // bg.sourceNode.playbackRate.value = 2
    bg.loop = -1;
  });

  createjs.Sound.registerSound('assets/bedsqueak2.mp3', bgId);
});