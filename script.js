const painels = document.querySelectorAll('.painel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

painels.forEach(painel => painel.addEventListener('click', toggleOpen));
painels.forEach(painel => painel.addEventListener('transitionend', toggleActive));