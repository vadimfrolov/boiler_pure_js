import './styles.css';
import laptop from '../public/laptop.png';

function component() {
  const element = document.createElement('img');
  element.classList.add('laptop-img');
  element.src = laptop;
  return element;
}

document.getElementById('front-inside').appendChild(component());
