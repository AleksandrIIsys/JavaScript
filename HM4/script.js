let btncreat = document.querySelector('.creat');
let btnclose = document.querySelector('.close');
let select = document.querySelector('#sel')
let blockCreat = document.querySelector('.block2');
let createlem = document.querySelector('.createlem');
let obj = {}
let block = document.querySelector('.block-father')
let butdel = document.getElementsByClassName('delbut')
let butred = document.getElementsByClassName('redbut')
let ferntemp = document.querySelectorAll('#fern');
let sprucetemp = document.querySelectorAll('#spruce')
let redelem = document.querySelector('.redelem')
let input = document.querySelectorAll('#inp');
redelem.addEventListener('click', function(){ //ивент на кнопку Сохранить
    let blockelem = document.querySelectorAll('.block')
    for(let i = 1; i < blockelem.length;i++){
        if(blockelem[i].getAttribute('id') == this.getAttribute('id')){
            //замена редакируемого объекта
            blockelem[i].innerHTML =`
            <div class = 'block-element' '> ${input[0].value} </div>
            <div class = 'block-element' '> ${input[1].value} </div>
            <div class = 'block-element' '> ${input[2].value} </div>
            <div class = 'block-element' '> ${input[3].value} </div>
            <div class = 'block-element' '> ${input[4].value} </div>
            <div class = 'block-element' '> ${input[5].value}</div>
            <div class = 'block-element' '> ${obj[Number(this.getAttribute('id'))].plant == 'fern' ? 'Папоротнике' : 'Ель обыкновенная'} </div>
            <div class = 'block-element' '><input type="button" class = 'redbut' value = "Редактировать"><input type="button" class = 'delbut' value = "Удалить"></div>
            `
            //переназначение значений в объекте
            obj[Number(this.getAttribute('id'))].setName(input[0].value);
            obj[Number(this.getAttribute('id'))].setAge(input[1].value);  
            obj[Number(this.getAttribute('id'))].setCategory(input[2].value);
            obj[Number(this.getAttribute('id'))].setInflorescence(input[3].value);          
            obj[Number(this.getAttribute('id'))].setDaner(input[4].value);     
            obj[Number(this.getAttribute('id'))].setUsability(input[5].value);       
            if(obj[Number(this.getAttribute('id'))].plant == 'fern'){
                obj[Number(this.getAttribute('id'))].setType(input[6].value);
                obj[Number(this.getAttribute('id'))].setNameDiscoverer(input[7].value)  
            }else{
                obj[Number(this.getAttribute('id'))].setLocation(input[8].value);
                obj[Number(this.getAttribute('id'))].setHigh(input[9].value)  
            }
        }
    }
    edit()
    del()
})
function edit(){ //функция назначающая ивент на кнопки редактировать в таблице
    for(let i of butred){
        i.addEventListener('click', function(){
            for(let i = 0; i < 2; i++){
                ferntemp[i].style.display = 'none'
                sprucetemp[i].style.display = 'none'
            }           
            select.parentNode.style.display = '' 
            document.querySelector('.block-mather').style.display = 'flex';
            btncreat.setAttribute('hidden','true')
            createlem.setAttribute('hidden','true')
            redelem.style.display = 'flex'
            redelem.setAttribute('id', this.parentNode.parentNode.getAttribute('id'))//даю кнопке id чтобы удобнее было обращаться к ней при сохранении
                input[0].value = obj[this.parentNode.parentNode.getAttribute('id')].getName()
                input[1].value = obj[this.parentNode.parentNode.getAttribute('id')].getAge()
                input[2].value = obj[this.parentNode.parentNode.getAttribute('id')].getCategory()
                input[3].value = obj[this.parentNode.parentNode.getAttribute('id')].getInflorescence()
                input[4].value = obj[this.parentNode.parentNode.getAttribute('id')].getDanger()
                input[5].value = obj[this.parentNode.parentNode.getAttribute('id')].getUsability()
            if(obj[this.parentNode.parentNode.getAttribute('id')].plant == 'fern'){
                for(let i of ferntemp){
                    i.style.display = 'flex'
                }        
                select[1].selected = 'true'
                input[6].value = obj[this.parentNode.parentNode.getAttribute('id')].getType()
                input[7].value = obj[this.parentNode.parentNode.getAttribute('id')].getNameDiscoverer()
            }
            if(obj[this.parentNode.parentNode.getAttribute('id')].plant == 'spruce'){
                for(let i of sprucetemp){
                    i.style.display = 'flex'
                }  
                select[2].selected = 'true'
                input[8].value = obj[this.parentNode.parentNode.getAttribute('id')].getLocation()
                input[9].value = obj[this.parentNode.parentNode.getAttribute('id')].getHigh()
            }
            select.disabled = 'disabled'
        })
    }
}
function del(){//функция для назначения ивента удаления на кнопку удалить
    for(let i of butdel){
        i.addEventListener('click',function(){
            if(confirm('нет?')){
                block.removeChild(this.parentNode.parentNode)
                delete obj[Number(this.parentNode.parentNode.getAttribute('id'))]
            }else{
                alert('да')
            }
        })
    }
}
createlem.addEventListener('click', function(){//ивент для создание объекта
    if(select.value === 'none'){
        alert("Почему, а главное зачем?")
        return 0;
    }
    if(select.value == 'Папоротник'){
        let fern = new Fern();
        fern.setName(input[0].value);
        fern.setAge(input[1].value);  
        fern.setCategory(input[2].value);
        fern.setInflorescence(input[3].value);          
        fern.setDaner(input[4].value);     
        fern.setUsability(input[5].value);       
        fern.setType(input[6].value);
        fern.setNameDiscoverer(input[7].value)  
        obj[Object.keys(obj).length] = fern
        obj[Object.keys(obj).length-1].plant = 'fern'
        block.innerHTML+= `<div class = 'block' id='${Object.keys(obj).length-1}'>
        <div class = 'block-element' > ${fern.getName()} </div>
        <div class = 'block-element' > ${fern.getAge()} </div>
        <div class = 'block-element' > ${fern.getCategory()} </div>
        <div class = 'block-element' > ${fern.getInflorescence()} </div>
        <div class = 'block-element' > ${fern.getDanger()} </div>
        <div class = 'block-element' > ${fern.getUsability()}</div>
        <div class = 'block-element' > Папоротник </div>
        <div class = 'block-element' ><input type="button" class = 'redbut' value = "Редактировать"><input type="button" class = 'delbut' value = "Удалить"></div>
        </div>`
    }
    if(select.value == 'Ель обыкновенная'){
        let spruce = new Spruce();
        spruce.setName(input[0].value);
        spruce.setAge(input[1].value);  
        spruce.setCategory(input[2].value);
        spruce.setInflorescence(input[3].value);          
        spruce.setDaner(input[4].value);     
        spruce.setUsability(input[5].value);       
        spruce.setLocation(input[8].value);
        spruce.setHigh(input[9].value)  
        obj[Object.keys(obj).length] = spruce
        obj[Object.keys(obj).length-1].plant = 'spruce'
        block.innerHTML+= `<div class = 'block' id='${Object.keys(obj).length-1}'>
        <div class = 'block-element'> ${spruce.getName()} </div>
        <div class = 'block-element'> ${spruce.getAge()} </div>
        <div class = 'block-element'> ${spruce.getCategory()} </div>
        <div class = 'block-element'> ${spruce.getInflorescence()} </div>
        <div class = 'block-element'> ${spruce.getDanger()} </div>
        <div class = 'block-element'> ${spruce.getUsability()}</div>
        <div class = 'block-element'> Ель обыкновенная </div>
        <div class = 'block-element'><input type="button" class = 'redbut' value = "Редактировать"><input type="button" class = 'delbut' value = "Удалить"></div>
        </div>`
    }       
    select[0].selected ='true'
    check()
    del()
    edit()
})
function check(){   
     for(let i in input){
        input[i].value = ''
    }
    for(let i = 0; i < 2; i++){
        ferntemp[i].style.display = 'none'
        sprucetemp[i].style.display = 'none'
    }
    if(this.value === 'Папоротник'){
        for(let i of ferntemp){
            i.style.display = 'flex'
        }        
    }
    if(this.value === 'Ель обыкновенная'){
        for(let i of sprucetemp){
            i.style.display = 'flex'
        }  
    }
}
select.addEventListener('change', check)
btnclose.addEventListener('click', function(){//ивент на кнопку закрытия
    document.querySelector('.block-mather').style.display = '';
    btncreat.hidden = false
    createlem.hidden = false
    redelem.style.display = ''
    select.hidden = false 


})
btncreat.addEventListener('click', function(){//ивент на кнопку открытия панельки создрания
    document.querySelector('.block-mather').style.display = 'flex';
    btncreat.setAttribute('hidden','true')
    select.disabled = false
    select[0].selected ='true'
    check()
})
//опасние класса
function Plant(){
    this.setName = function(name){
        this._name = name
    };
    this.setAge = function(age){
        this._age = age;
    };
    this.setCategory = function(category) {
        this._category = category;        
    }
    this.setInflorescence = function(inflorescence) {
        this._inflorescence = inflorescence;        
    }
    this.setDaner = function(danger){
        this._danger = danger;
    };
    this.setUsability = function(usability){
        this._usability =  usability;
    }
}
Plant.prototype.getName = function(){
    return this._name;
}
Plant.prototype.getAge = function(){
    return this._age;
}
Plant.prototype.getCategory = function(){
    return this._category;
}
Plant.prototype.getInflorescence = function(){
    return this._inflorescence;
}
Plant.prototype.getDanger = function(){
    return this._danger;
}
Plant.prototype.getUsability = function(){
    return this._usability;
}
function Spruce(){
    Plant.call(this)
    this.setLocation = function(location){
        this._location = location;
    }
    this.setHigh = function(high){
        this._high = high;
    }
}
Spruce.prototype = Object.create(Plant.prototype)
Spruce.prototype.getLocation = function(){
    return this._location
}
Spruce.prototype.getHigh = function(){
    return this._high
}
function Fern(){
    Plant.call(this)
    this.setType = function(type){
        this._type = type;
    }
    this.setNameDiscoverer = function(namediscoverer){
        this._namediscoverer = namediscoverer;
    }
}
Fern.prototype = Object.create(Plant.prototype)
Fern.prototype.getType = function(){
    return this._type;
}
Fern.prototype.getNameDiscoverer = function(){
    return this._namediscoverer;
}
