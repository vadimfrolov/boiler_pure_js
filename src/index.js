import './styles.css';
import laptop from '../public/laptop.png';
import avatarImage from '../public/avatar11r.png';

function component() {
  const element = document.createElement('img');
  element.classList.add('laptop-img');
  element.src = laptop;
  return element;
}

function avatar() {
  const element = document.createElement('img');
  element.classList.add('avatar');
  element.src = avatarImage;
  return element;
}

document.getElementById('front-inside').appendChild(component());
document.getElementById('central-logo-text').appendChild(avatar());
