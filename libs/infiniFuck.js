$(function() {
  'use strict';
  var MORTY_FILES = ['mortyclimax.mp3', 'mortyexhale1.mp3'];
  var queue = new createjs.LoadQueue(true);
  queue.installPlugin(createjs.Sound);

  for (var i = MORTY_FILES.length - 1; i >= 0; i--) {
    queue.loadFile({id: MORTY_FILES[i], src: 'assets/' + MORTY_FILES[i]});
  }

  queue.on('complete', function() {
  });

  queue.load();

  // var bgId = 'bedsqueak';
  // createjs.Sound.on('fileload', function(event) {
  //   var bg = createjs.Sound.play(event.id);
  //   console.log(bg);
  //   // bg.sourceNode.playbackRate.value = 2
  //   bg.loop = -1;
  // });

  // createjs.Sound.registerSound('assets/bedsqueak2.mp3', bgId);
});