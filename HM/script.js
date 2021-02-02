document.querySelector('.button1').addEventListener('click',() => {
    site = ['https://sciencevsmagic.net/tes/#0.5.0.2.aaaaaaaaaaaaa','https://www.youtube.com/watch?v=asQZ5LR3RTw','https://frequency2156.com/','http://endless.horse/','http://shitday.de/']
    window.location.href = site[getRndInteger(0,4)]
})
document.querySelector('.button2').addEventListener('click',() => {
    document.body.style.background = '#123456'
    document.querySelector('.button1').value = "Не нажимай на меня" 
    })
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}