class AdviceSlipAPI {
  static init() {
    this.baseUrl = 'https://api.adviceslip.com/advice'
  }

  static get(url) {
    return fetch(url)
      .then(resp => resp.json())
  }

  static getRandomAdviceSlip() {
    return this.get(this.baseUrl)
  }

  static getAdviceSlip(id) {
    return this.get(this.baseUrl + '/' + id)
  }
}

AdviceSlipAPI.init()

export default AdviceSlipAPI