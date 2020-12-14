let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function(trigger) { // 1
    trigger.addEventListener('click', function() { // 2
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');

            activeTrigger.classList.remove('active');
            trigger.classList.add('active');
      
            activeContent.classList.remove('active');
            content.classList.add('active');
    });
 });



 

    






//  document.querySelector('.clients__testimonial').classList.add('active');
// function swipe() {
//     \


// console.log(active);
// // console.log(clients.style.display);
// tabs .onclick = clients.classList.remove("active");