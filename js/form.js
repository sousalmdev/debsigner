document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.querySelector('.trigger');
    const content = document.querySelector('.content');
    content.classList.remove('open')
    setTimeout((delay)=>{
    trigger.addEventListener('click', function() {
        content.classList.toggle('open');
    });
}),'10000'});

