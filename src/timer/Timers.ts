import Timer from './Timer'

export default class Timers {
  private _timers: Array<Timer>

  constructor(readonly refreshTimer: any) {
    this._timers = new Array<Timer>()
  }

  public set timers(timers: Array<Timer>) {
    this._timers = timers
  }

  public get timers() {
    return this._timers
  }

  public addTimer(seq: number, num: number) {
    const timer = new Timer(seq, num)
    timer.interval = window.setInterval(
      this.decreateTimer.bind(this, timer),
      1000,
    )

    this._timers.push(timer)
    this.refreshTimer()
  }

  private decreateTimer(timer: Timer) {
    const count = timer.decrease()
    this.refreshTimer()

    if (count === -1) {
      window.clearInterval(timer.interval)
      this._timers = this._timers.filter((t: Timer) => t.seq !== timer.seq)
    }
  }

  public clearAll() {
    this._timers
      .map((t) => t.interval)
      .forEach((time) => clearInterval.bind(this, time))

    this._timers = new Array<Timer>()
  }
}
