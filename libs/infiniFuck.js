$(function() {
  'use strict';
  var MORTY_FILES = ['mortyclimax.mp3', 'mortyexhale1.mp3', 'mortygasp1.mp3', 'mortygasp2.mp3', 'mortygasp3.mp3', 'mortygrunt1.mp3',
  'mortymoan11.mp3', 'mortymoan1.mp3', 'mortymoan2.mp3', 'mortymoan3.mp3', 'mortymoan4.mp3', 'mortymoan5.mp3', 'mortymoan6.mp3', 'mortymoan7.mp3',
  'mortymoan8.mp3', 'mortymoan9.mp3', 'morty_ohjeezrick.mp3', 'morty_rick!!.mp3', 'morty_wowrick.mp3', 'okay_holdonjustasecondmorty.mp3', ];

  // Returns a promise that resolves when all audio is loaded
  function loadAudio() {
    var dfd = $.Deferred(),
        queue = new createjs.LoadQueue(true);
    queue.installPlugin(createjs.Sound);

    for (var i = MORTY_FILES.length - 1; i >= 0; i--) {
      queue.loadFile({id: MORTY_FILES[i], src: 'assets/' + MORTY_FILES[i]});
    }

    queue.on('complete', function() {
      dfd.resolve();
    });

    queue.load();

    return dfd.promise();
  }

  loadAudio()
  .then(function() {
    console.log('all audio loaded');
  });

  // var bgId = 'bedsqueak';
  // createjs.Sound.on('fileload', function(event) {
  //   var bg = createjs.Sound.play(event.id);
  //   console.log(bg);
  //   // bg.sourceNode.playbackRate.value = 2
  //   bg.loop = -1;
  // });

  // createjs.Sound.registerSound('assets/bedsqueak2.mp3', bgId);
});