'use strict';

var
  fs = require('fs'),
  GolSimulator = require('./GameOfLifeSimulator'),
  iteration = 0;

readStdInToBoard(console.error, processBoard);

function processBoard(board){
  // HACK: potentially a hack.. clear the screen, only tested on Windows
  process.stdout.write("\u001b[2J\u001b[0;0H");
  board = new GolSimulator().cycle(board);
  console.log(`Iteration: ${iteration++}`);
  console.log(board);
  console.log("Press <Ctrl> + <C> to stop");
  setTimeout(function () {
    processBoard(board);
  }, 500);
}

function readStdInToBoard(err, done){
  //
  // wanted to use promises here, but wasn't getting stack trace
  let board = '';
  process.stdin.resume();
  process.stdin.on('data', function(buf) {
    board += buf.toString();
  });
  process.stdin.on('end', function() {
    done(board);
  });
}
