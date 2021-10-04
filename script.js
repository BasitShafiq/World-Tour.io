

let btnVideo = document.querySelectorAll(`.btn-vid`);

btnVideo.forEach(btn => {
    btn.addEventListener('click', () => {
       let active=document.querySelector(`.controls .active`)
      active.classList.remove(`active`);
        btn.classList.add('active');
        let dataAttrib = btn.getAttribute('data-src');
        document.querySelector(`#video-slider`).src = dataAttrib;
    });
});
