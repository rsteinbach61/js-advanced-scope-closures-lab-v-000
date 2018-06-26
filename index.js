function produceDrivingRange(blockrange){
  return function drivingRange(start, end){
    start = Number(start.replace('th', ''))
    end = Number(end.replace('th', ''))
    let blocks = end - start

    if (blocks > blockrange){
      const range = blocks - blockrange
      return range + ' blocks out of range'
    }
    else {
      const range = blockrange - blocks
      return 'within range by ' + range
    }
  }
}


function produceTipCalculator(percent){
  return function tipCalculator(fare){
    return fare * percent
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
