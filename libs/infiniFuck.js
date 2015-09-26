$(function() {
  'use strict';
  var MORTY_FILES = ['mortyclimax.mp3', 'mortyexhale1.mp3', 'mortygasp1.mp3',
                     'mortygasp2.mp3', 'mortygasp3.mp3', 'mortygrunt1.mp3',
                     'mortymoan11.mp3', 'mortymoan1.mp3', 'mortymoan2.mp3',
                     'mortymoan3.mp3', 'mortymoan4.mp3', 'mortymoan5.mp3',
                     'mortymoan6.mp3', 'mortymoan7.mp3', 'mortymoan8.mp3',
                     'mortymoan9.mp3', 'morty_ohjeezrick.mp3', 'morty_rick!!.mp3',
                     'morty_wowrick.mp3', 'okay_holdonjustasecondmorty.mp3'],
      RICK_FILES = ['rick_awjeez.mp3', 'rick_awlookatyou.mp3',
                    'rick_bigtoughguyallofasudden.mp3', 'rickclimax.mp3',
                    'rickgasp1.mp3', 'rickgrunt1.mp3', 'rickgrunt2.mp3',
                    'rick_howdoyoulikethat.mp3', 'rickmoan1.mp3',
                    'rickmoan2b.mp3', 'rickmoan2.mp3', 'rickmoan3.mp3',
                    'rickmoan4.mp3', 'rick_thatswhatyouget.mp3'],
      BG_FILE = ['bedsqueak1.mp3'];


  // Returns a promise that resolves when all audio is loaded
  function loadAudio() {
    var dfd = $.Deferred(),
        audioFiles = MORTY_FILES.concat(RICK_FILES, BG_FILE),
        queue = new createjs.LoadQueue(true);
    queue.installPlugin(createjs.Sound);

    for (var i = audioFiles.length - 1; i >= 0; i--) {
      queue.loadFile({id: audioFiles[i], src: 'assets/' + audioFiles[i]});
    }

    queue.on('complete', function() {
      dfd.resolve();
    });

    queue.on('error', function() {
      dfd.reject();
    });

    queue.load();

    return dfd.promise();
  }

  loadAudio()
  .then(function() {
    console.log('all audio loaded');
    $('#loading-indicator').text('Done loading!');
  }, function() {
    $('#loading-indicator').text('Error loading, try refreshing?');
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