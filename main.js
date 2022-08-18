const pianoKeys = document.querySelectorAll('.key');

function playSound(url){
    new Audio(url).play();
}

pianoKeys.forEach((key, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    const url = 'piano-keys/key' + number + '.mp3';
    key.addEventListener('click', () => playSound(url) )
})