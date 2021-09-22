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
        textButton.innerText = 'text1';
        break;
      case '2':
        textButton.innerText = 'text2';
        break;
      case '3':
        textButton.innerText = 'text3';
        break;
      case '4':
        textButton.innerText = 'text4';
        break;
        case '5':
          textButton.innerText = 'text5';
          break;
      default:
        console.log('goodbye');
        console.log(buttons[i].id);
    }
  });
}

// const ux = document.getElementById("3");

// ux.onclick = function () {
//   console.log(ux[0].checked);
// }

// const radios = document.querySelectorAll("input");
// for (let i=0; i <= radios.length; i+= 1) {
//   radios[i].onclick = function () {
//     if (radios[i].checked) {
//       console.log(radios[i].id)
//     }
//     // const rbs = document.querySelectorAll('input[name="choice"]');
//     // let selectedValue;
//     // for (const rb of rbs) {
//     //     if (rb.checked) {
//     //         selectedValue = rb.value;
//     //         break;
//     //     }
//     }
// }

document.getElementById('front-inside').appendChild(component());
document.getElementById('central-logo-text').appendChild(avatar());

document.getElementById('git').appendChild(gitImg());
document.getElementById('link').appendChild(linkImg());
document.getElementById('inst').appendChild(instImg());
