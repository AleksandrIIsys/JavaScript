document.querySelector('.button1').addEventListener('click',() => {
    site = ['https://sciencevsmagic.net/tes/#0.5.0.2.aaaaaaaaaaaaa','https://www.youtube.com/watch?v=asQZ5LR3RTw','https://frequency2156.com/','http://endless.horse/','http://shitday.de/']
    window.location.href = site[getRndInteger(0,4)]
})
document.querySelector('.button2').addEventListener('click',() => {
    document.body.style.background = '#123456'
    document.querySelector('.button1').value = "Не нажимай на меня" 
    document.querySelector('.button1').disabled = false
    })
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var ul = document.querySelector('.Tab')
var i = 1
document.querySelector('.button3').addEventListener('click',()=>{
    let li = document.createElement('li') 
    li.innerHTML = i
    li.addEventListener('click',rem)
    ul.appendChild(li)
    i+=1
})
function rem(){
    ul.removeChild(this)
}
