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

const buttons = document.querySelectorAll('input[type=radio]');
const textButton = document.getElementById('card-text');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    switch (buttons[i].id) {
      case '1':
        textButton.innerText = 'First, we need to clearly define the task: state and describe goals to be achieved';
        break;
      case '2':
        textButton.innerText = `User-experience research methods are great at producing data and insights.

        We can use: field study, user interviews and requirements & constraints gathering`;
        break;
      case '3':
        textButton.innerText = 'Explore design possibilities by brainstorming, and testing the best ideas in order to identify best-of-breed design components to retain';
        break;
      case '4':
        textButton.innerText = `I can create sketches in Figma or Miro

        With prototypes people show you where the problem areas are, then redesign and test again.
        `;
        break;
        case '5':
          textButton.innerText = '“First, solve the problem. Then write the code.” - John Johnson';
          break;
      default:
        console.log('goodbye');
        console.log(buttons[i].id);
    }
  });
}

document.getElementById('front-inside').appendChild(component());
document.getElementById('central-logo-text').appendChild(avatar());

document.getElementById('git').appendChild(gitImg());
document.getElementById('link').appendChild(linkImg());
document.getElementById('inst').appendChild(instImg());
