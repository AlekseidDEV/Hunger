const linkDown = document.querySelector('.link-down');

const trackScroll = () => {
    let scrolled = window.pageYOffset
    window.scrollBy(0,800)
    
}

linkDown.addEventListener('click', (e) => {
    e.preventDefault()
    trackScroll()
    
})

