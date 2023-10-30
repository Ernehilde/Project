const huruf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const btn = document.getElementById('btn'),
    btn2 = document.getElementById('btn-2'),
     alphabet = document.querySelectorAll('.alphabet'),
     alphabet2 = document.querySelectorAll('.alphabet2')

btn.addEventListener('click', () =>{
    for(let i = 0; i< alphabet.length; i++){
    let RandomAlphabet = huruf[getRandomName()]
    alphabet[i].textContent = RandomAlphabet;
    }
})

btn2.addEventListener('click', () =>{
    for(let i =0; i<alphabet2.length; i++){
        let RandomAlphabet = huruf[getRandomName()]
        alphabet2[i].textContent = RandomAlphabet
    }
})

function getRandomName(){
    return Math.floor(Math.random() * huruf.length)
}