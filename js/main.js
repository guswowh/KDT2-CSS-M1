let accordionBtn = document.querySelectorAll('.main-faq__ques');
let allTexts = document.querySelectorAll('.main-faq__answ');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
   let targetText = el.currentTarget.nextElementSibling.classList;
   let target = el.currentTarget;
   
   if (targetText.contains('show')) {
       targetText.remove('show');
       target.classList.remove('active');
   } 
   else {
      accordionBtn.forEach(function (el) {
         el.classList.remove('active');
         
         allTexts.forEach(function (el) {
            el.classList.remove('show');
         })
      })
         targetText.add('show');
         target.classList.add('active');
   }  
}