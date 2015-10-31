'use strict';
var os = require('os');

class GameOfLifeSimulator {
  constructor(){
    this._dead = '0';
    this._alive = '1';
    this._relativeNeighbors = [
      {x: -1, y: -1}, {x:  0, y: -1}, {x:  1, y: -1},
      {x: -1, y:  0},                 {x:  1, y:  0},
      {x: -1, y:  1}, {x:  0, y:  1}, {x:  1, y:  1}
    ];
  }

  cycle(board){
    let grid = this._boardToGrid(board);
    let next = this._boardToGrid(board);

    for (let y = 0; y < grid.length; y++) {
      let row = grid[y];

      for (let x = 0; x < row.length; x++) {
        let cell = grid[y][x];
        let liveNeighbors =
          this._countLiveNeighbors(grid, x, y, row.length, grid.length);
        next[y][x] = this._generate( cell, liveNeighbors );
      }

    }

    return this._gridToboard(next);
  }

  _generate( cell, neighborCount ){
    if( this._isDead(cell) ){
      if(neighborCount === 3){
        // reproduce
        return this._alive;
      }

    } else {
      // it's alive!
      if( neighborCount < 2  ){
        // under-population
        return this._dead;
      } else if( neighborCount === 2 || neighborCount === 3){
        // survival
        return this._alive;
      } else {
        // overcrowding (> 3)
        return this._dead;
      }

    }

    return cell;
  }

  _isDead( cell ){
    return cell === this._dead;
  }

  _countLiveNeighbors( grid, x, y, xmax, ymax ){
    var result = 0;
    this._relativeNeighbors.forEach( relativePoint => {
      let nx = x + relativePoint.x;
      let ny = y + relativePoint.y;

      let isInbounds =
        nx >= 0 && nx < xmax &&
        ny >= 0 && ny < ymax;

      if( isInbounds ){
        let neighbor = grid[ny][nx];
        if( !this._isDead(neighbor)){
          result++;
        }
      }
    });
    return result;
  }

  _boardToGrid(board){
    return board
      .split(os.EOL)
      .filter(line => line)
      .map( m => m.split(''));
  }

  _gridToboard(grid){
    return grid
      .map(g => g.join(''))
      .join(os.EOL);
  }

}

module.exports = GameOfLifeSimulator;
