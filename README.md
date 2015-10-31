# Game of Life
A Game of Life simulator, written in Node

# System Prerequisites
  * Node.js 4.0.0

# Installation
  1. `git clone git@github.com:krcourville/node_game_of_life.git`
  2. `npm install`

# Execution
Input is expected to from stdin. Use platform-specific redirection to cycle.js

See `wintest/test.cmd` for an example command line for Windows.

Note: Try running test_repeatcycle.cmd and watch the game of life play out to
completion!

# Run Unit Tests
`npm test`

# Instructions
Write some code that evolves generations through the "game of life".

The input will be a game board of cells, either alive (1) or dead (0).

The code should take this board and create a new board for the next generation based on the following rules:

  1. Any live cell with fewer than two live neighbours dies (under- population)
  2. Any live cell with two or three live neighbours lives on to the next generation (survival)
  3. Any live cell with more than three live neighbours dies (overcrowding)
  4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction)

As an example, this game board as input:

    01000
    10011
    11001
    01000
    10001

Will have a subsequent generation of:

    00000
    10111
    11111
    01000
    00000
