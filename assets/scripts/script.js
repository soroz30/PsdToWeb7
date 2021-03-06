const mobileViewport = window.matchMedia('screen and (max-width: 767px)');
const modals = document.querySelectorAll('[data-toggle=modal]');
const animated = document.querySelectorAll('.animated');
const layers = document.querySelectorAll('.layer');
const worksImages = document.querySelectorAll('#works a + img, #works .modal-body img');

const toggleModals = matches => {
    if (matches) {
        for (let i = 0; i < modals.length; i++) {
            modals[i].removeAttribute('data-toggle');
        }
    } else {
        for (let i = 0; i < modals.length; i++) {
            modals[i].setAttribute('data-toggle', 'modal');
        }
    }
};

toggleModals(mobileViewport.matches);
mobileViewport.addListener(mq => toggleModals(mq.matches));

for (let i = 0; i < animated.length; i++) {
    animated[i].addEventListener('mouseover', e => {
        if (!e.target.classList.contains('rotate')) {
            e.target.classList.add('rotate');
        }
        setTimeout(() => {
            e.target.classList.remove('rotate');
        }, 500);
    });
}

for (let i = 0; i < layers.length; i++) {
    layers[i].addEventListener('mouseup', e => {
        e.currentTarget.style['animation-fill-mode'] = 'none';
        e.currentTarget.addEventListener('mouseleave', (e) => {
            e.currentTarget.style['animation-fill-mode'] = 'forwards';
        });
    });
}
