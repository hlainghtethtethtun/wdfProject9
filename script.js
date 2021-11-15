'use strict';

const toggleOn = document.querySelector('.monthly');
const toggleOff = document.querySelector('.annually');

const priceOne = document.querySelector('.annu1');
const priceTwo = document.querySelector('.annu2');
const priceThree = document.querySelector('.annu3');

toggleOff.style.opacity="1";
// toggleOff.classList.remove('.hiddenOff');
// toggleOff.style.removeProperty="display";

toggleOff.addEventListener("click",function(){
    // toggleOff.classList.add('.hiddenOff');
    // toggleOn.classList.remove('.hiddenOn');
    // toggleOff.style.display='none';
    // toggleOn.style.display='null';

    // toggleOff.style.display="none";
    // toggleOn.style.removeProperty="display";

    toggleOff.style.opacity="0";
    toggleOn.style.opacity="1";

    priceOne.textContent=19.99;
    priceTwo.textContent=24.99;
    priceThree.textContent=39.99;

});

toggleOn.addEventListener("click",function(){
    // toggleOff.classList.remove('.hiddenOff');
    // toggleOn.classList.add('.hiddenOn');

    toggleOff.style.opacity="1";
    toggleOn.style.opacity="0";

    priceOne.textContent=199.99;
    priceTwo.textContent=249.99;
    priceThree.textContent=399.99;
});