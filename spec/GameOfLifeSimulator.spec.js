describe("GameOfLifeSimulator", ()=>{
'use strict';
  let GameOfLifeSimulator = require('../src/GameOfLifeSimulator');
  let os = require('os');

  let sut;
  beforeEach(()=>{
    sut = new GameOfLifeSimulator();
  });

  describe("Rules", ()=>{
    it("should die if 0 neighbors", ()=>{
      let actual = sut._generate( "1", 0);
      expect(actual).toBe("0");
    });

    it("should die if 1 neighbor", ()=>{
      let actual = sut._generate( "1", 1);
      expect(actual).toBe("0");
    });

    it("should survive if 2 neighbors", ()=>{
      let actual = sut._generate( "1", 2);
      expect(actual).toBe("1");
    });

    it("should survive if 3 neighbors", ()=>{
      let actual = sut._generate( "1", 3);
      expect(actual).toBe("1");
    });

    it("should survive if 4 neighbors", ()=>{
      let actual = sut._generate( "1", 4);
      expect(actual).toBe("0");
    });

    it("should reproduce if 3 neighbors", ()=>{
      let actual = sut._generate( "0", 3);
      expect(actual).toBe("1");
    });

    it("should not reproduce if 4 neighbors", ()=>{
      let actual = sut._generate( "0", 4);
      expect(actual).toBe("0");
    });

    it("should not reproduce if 2 neighbors", ()=>{
      let actual = sut._generate( "0", 2);
      expect(actual).toBe("0");
    });
  });

  describe("counting neighbors", ()=>{
    let grid = null;
    beforeEach(()=>{
      grid = [
        "0000000000",
        "0111000000",
        "0101000000",
        "0111000000",
        "0000000000",
        "0000000000",
        "0000000000",
        "0000000000",
        "0000000000",
        "0000000000"
      ].map(m=>m.split(''));
    });

    let maxY = 10;
    let maxX = maxY;

    it("should count 8", ()=>{
      let actual = sut._countLiveNeighbors(grid, 2, 2, maxX, maxY);
      expect(actual).toBe(8);
    });

    it("should count 2", ()=>{
      let actual = sut._countLiveNeighbors(grid, 3, 1, maxX, maxY);
      expect(actual).toBe(2);
    });

    it("should count 2", ()=>{
      let actual = sut._countLiveNeighbors(grid, 4, 0, maxX, maxY);
      expect(actual).toBe(1);
    });

    it("should count 0", ()=>{
      let actual = sut._countLiveNeighbors(grid, maxX - 1, maxY - 1, maxX, maxY);
      expect(actual).toBe(0);
    });
  });

  it("should underpopulate with less than 2 neighbors", ()=>{
    let input = [
      "00000",
      "00000",
      "00100",
      "00000",
      "00000"
    ].join(os.EOL);
    let expected = [
      "00000",
      "00000",
      "00000",
      "00000",
      "00000"
    ].join(os.EOL);

    let actual = sut.cycle(input);
    expect(actual).toBe(expected);
  });
  
});
