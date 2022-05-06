// Import stylesheets
import './style.css';

const names = document.querySelectorAll('[data-name]');
const pages = document.querySelectorAll('.page-link');
const listBody = document.querySelector('.list-body');
const previus = document.querySelector("[data-value='0']")
const next = document.querySelector("[data-value='4']")
const nameArray = [];
let j = 1


names.forEach((name, index) => {
  nameArray.push(name.textContent);
});

creatElement(nameArray[0], nameArray[1]);

function creatElement(idex1, index2) {
  listBody.innerHTML = `
          <div class="w-4/5 h-10 py-3 px-1">
             <p data-name class="hover:text-blue-dark">${idex1}</p>
          </div> 
          <div class="w-4/5 h-10 py-3 px-1">
             <p data-name class="hover:text-blue-dark">${index2}</p>
          </div> 
          `;
}
function paginationBtn(index) {

  switch (index) {
    case 0:
      return (j-1)===0? paginationBtn(1) : paginationBtn(j-1)  

    case 1:
      previus.style.pointerEvents= "none"
      previus.classList.add('disable')
      next.style.pointerEvents= "auto"
      next.classList.remove('disable')
      creatElement(nameArray[0], nameArray[1]);

      break;

    case 2:
      previus.style.pointerEvents= "auto"
      previus.classList.remove('disable')
      next.style.pointerEvents= "auto"
      next.classList.remove('disable')
      creatElement(nameArray[2], nameArray[3]);

      break;

    case 3:
      previus.style.pointerEvents= "auto"
      previus.classList.remove('disable')
      next.style.pointerEvents= "none"
      next.classList.add('disable')
      creatElement(nameArray[4], nameArray[5]);

      break;
    case 4:
      return (j+1)===4? paginationBtn(3): paginationBtn(j+1) 

  }
  j = index;
}
pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    paginationBtn(index);
  });
});

