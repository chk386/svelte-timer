export default class Timer {
  private _interval: number

  constructor(readonly _seq: number, private _num: number) {}

  public set interval(time: number) {
    this._interval = time
  }

  public get interval() {
    return this._interval
  }

  public get seq() {
    return this._seq
  }

  public get num() {
    return this._num
  }

  public decrease() {
    return (this._num -= 1)
  }
}
