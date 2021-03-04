var input = document.querySelector('.task');
var inputdate = document.querySelector('.date')
var ul = document.querySelector('ul');
var container = document.querySelector('div');
var lists = document.querySelectorAll('li');
var span = document.getElementsByClassName('trash');
var clearBtn = document.querySelector('#clear');
var addBtn = document.querySelector('#add');
var obj = {}
//ункция которая загружает todo-app, если список найден в локальном хринилище
function loadTodo() {
    ul.innerHTML = ''
    if (localStorage.getItem('todoList')) {
        obj = JSON.parse(localStorage.getItem('todoList'))
    }
    for(let i in obj){
        var li = document.createElement('li');
        var spanElement = document.createElement('span');
        var spanElementClock = document.createElement('span');
        var icon = document.createElement('i');  
        li.setAttribute('id', i)
        var dateTodo = new Date(obj[i].date)
        initializeClock(spanElementClock, dateTodo)
        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        spanElement.setAttribute('class', 'trash')
        spanElementClock.setAttribute('class', 'clock')
        ul.appendChild(li).append(spanElement, obj[i].value, spanElementClock)
    }
}
//удаление элемента
function deletload() {
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {
            delete obj[Number(this.parentNode.getAttribute('id'))]
            ul.removeChild(this.parentNode)
            saveTodo()
        })
    }
}
//добавление элемента
addBtn.addEventListener('click', function () {
    var li = document.createElement('li');
    var spanElement = document.createElement('span');
    var spanElementClock = document.createElement('span');
    var icon = document.createElement('i');
    if(inputdate.value == ''){
        return 0
    }   
     li.setAttribute('id', Object.keys(obj).length)
    obj[Object.keys(obj).length] = {date:inputdate.value,value:input.value}
    var newTodo = input.value + ' ';
    input.value = '';
    var dateTodo = new Date(inputdate.value)
    inputdate.value = ''
    initializeClock(spanElementClock, dateTodo)
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    spanElement.setAttribute('class', 'trash')
    spanElementClock.setAttribute('class', 'clock')
    ul.appendChild(li).append(spanElement, newTodo, spanElementClock)
    saveTodo()
    deletload()
    updateClock()

})
//добавление элемента таймера
function initializeClock(spanElementClock, dateTodo) {
    var t = getTimeRemaining(dateTodo);
    spanElementClock.innerHTML = " - " + t.days + " дней " + ('0' + t.hours).slice(-2) + " часов " + ('0' + t.minutes).slice(-2) + " минут " + ('0' + t.seconds).slice(-2) + " секунд";

}
//реализация самого таймера
function updateClock() {
    var elementsclock = document.querySelectorAll('.clock')
    for (let i in obj) {
        var t = getTimeRemaining(obj[i].date);
        if (t.total <= 0){
            alert('время вышло')
            delete obj[i]
            ul.removeChild(elementsclock[i].parentNode)  
        }
            elementsclock[i].innerHTML = " - " + t.days + " дней " + + ('0' + t.hours).slice(-2) + " часов " + ('0' + t.minutes).slice(-2) + " минут " + ('0' + t.seconds).slice(-2) + " секунд";
    }
    
    var inter = setInterval(updateClock,1000)
    if(elementsclock.length == 0)
        clearInterval(inter)
}
//сохранение таблицы
function saveTodo() {
    localStorage.setItem("todoList", JSON.stringify(obj))
}
//Удаление todoList 
clearBtn.addEventListener('click', function () {
    ul.innerHTML = '';
    obj = {}
    localStorage.clear();
});
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

loadTodo();
deletload();
updateClock();

