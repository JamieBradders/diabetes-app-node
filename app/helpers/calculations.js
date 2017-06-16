class Calculations {
  constructor(data) {
    this.data = data
    this.bloods = []

    this._init(this.data)
  }

  _init(data) {
    this._constructArray(data)
  }

  _constructArray(data) {
    let tmp = []
    Object.keys(data).forEach(key => {
      tmp.push(data[key].blood)
    })

    this.bloods = tmp
  }

  getAverage() {
    const arr = this.bloods
    const sum = arr.reduce((p, c) => p + c)
    const average = sum / arr.length

    // Return the average
    return Math.round(average * 10) / 10
  }

  getHighest() {
    const arr = this.bloods

    // Return the highest
    return Math.max.apply(Math, arr)
  }

  getLowest() {
    const arr = this.bloods

    // Return the highest
    return Math.min.apply(Math, arr)
  }

  getTotalResults() {
    const arr = this.bloods

    // Return the highest
    return arr.length
  }
}

module.exports = Calculations