// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    console.log('click')
    navbar.classList.toggle('change');
    menu.classList.toggle('change')

})
// End of Navbar

// Section 2 Video

const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')


const playPause = () => {
    if (video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle';
        video.style.opacity = '0.7';
    } else {
        video.pause()
        btn.className = 'far fa-play-circle';
        video.style.opacity = '0.3'
    }

}

btn.addEventListener('click', () => {
    playPause();
})

video.addEventListener('timeupdate', (event) => {
    let procent = (video.currentTime / video.duration) * 100;
    bar.style.width = `${procent}%`
    if (video.ended) {
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.3'
    }
})

// End of Section 2 Video