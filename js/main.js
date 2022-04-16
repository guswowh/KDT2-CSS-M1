const accordionBtnEls = document.querySelectorAll('.main-faq__ques');
const allTexts = document.querySelectorAll('.main-faq__answ');

// event listener
accordionBtnEls.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
   const targetClasses  = el.currentTarget.nextElementSibling.classList;
   const currTarget = el.currentTarget;

   
   if (targetClasses .contains('show')) {
       targetClasses .remove('show');
       currTarget.classList.remove('active');
   } 
   else {
      accordionBtnEls.forEach(function (el) {
         el.classList.remove('active');
         
         allTexts.forEach(function (el) {
            el.classList.remove('show');
         })
      })
         targetClasses .add('show');
         currTarget.classList.add('active');
   }  
}