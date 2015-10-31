'use strict';

var
  fs = require('fs'),
  GolSimulator = require('./GameOfLifeSimulator');

readStdInToBoard(console.error, processBoard);

function processBoard(board){
  board = new GolSimulator().cycle(board);  
  console.log(board);
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
