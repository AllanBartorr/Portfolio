document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
});


const myObserve = new IntersectionObserver((entries ) => {
    entries.forEach ( (entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }   
    })
})
const elements = document.querySelectorAll('.expe')

elements.forEach((element) => myObserve.observe (element)) 