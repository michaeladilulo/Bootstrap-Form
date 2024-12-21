console.log('hello world')

window.addEventListener('scroll', function() {
    const stickySection = document.querySelector('.sticky-section');
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    console.log('offset top', stickySection.offsetTop);
    
    

    // Check if the sticky section has reached the top of the page
    if (scrollPosition > stickySection.offsetTop || scrollPosition == stickySection.offsetTop) {
        stickySection.classList.add('sticky-active');
    } else {
        stickySection.classList.remove('sticky-active');
    }
});