import App from './app';
import { WIDTH, HEIGHT } from './constants';
import 'style.css';

function main() {
  const app = new App({ width: WIDTH, height: HEIGHT, backgroundColor: 0xf7f7f7 });

  window.document.body.appendChild(app.view);
}

window.onload = main;
