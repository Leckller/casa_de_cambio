import { createE } from "./createElements"

export function vetObjcts(coinBase) {
  fetch('https://api.exchangerate.host/latest?base=' + coinBase)
    .then(res => res.json())
    .then(res => {
      createE(Object.entries(res.rates).map(([coin, price]) => {
        return { [coin]: price }
      }))
    })
}

