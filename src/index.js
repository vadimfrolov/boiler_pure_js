import './styles.css';
import laptop from '../public/laptop.png';
import avatarImage from '../public/avatar11r.png';
import git from '../public/git.png';
import link from '../public/link.png';
import inst from '../public/inst.png';



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

function gitImg() {
  const element = document.createElement('img');
  element.classList.add('social-icon');
  element.src = git;
  return element;
}

function linkImg() {
  const element = document.createElement('img');
  element.classList.add('social-icon');
  element.src = link;
  return element;
}

function instImg() {
  const element = document.createElement('img');
  element.classList.add('social-icon');
  element.src = inst;
  return element;
}

document.getElementById('front-inside').appendChild(component());
document.getElementById('central-logo-text').appendChild(avatar());

document.getElementById('git').appendChild(gitImg());
document.getElementById('link').appendChild(linkImg());
document.getElementById('inst').appendChild(instImg());