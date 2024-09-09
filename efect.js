document.addEventListener("DOMContentLoaded", function() {
    const myObserve = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const elements = document.querySelectorAll('.expe');
    elements.forEach((element) => myObserve.observe(element));
});
