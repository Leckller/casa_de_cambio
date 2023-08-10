
import { div } from "../src/main";

export function createE(arr) {
  arr.forEach((elem) => {
    const e = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');
    span.innerText = elem.coin;
    e.className = 'coin';
    img.src = '../assets/coin.png';
    div.appendChild(e);
    e.appendChild(img);
    e.appendChild(span);
  })
}