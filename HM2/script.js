let term = {
    Russia: -30,
    Canada: 10,
    Germany: 12,
    Spain: 20,
}
var sum = 0, count = 0;
for(i in term){
    sum+=term[i]
    count++
}
sum/=count
console.log(sum)
maxTemp(term)
function maxTemp(term){
    var max = -Infinity
    for (key in term) {
        if(term[key] > max){
            max = term[key]
        }
    }
    console.log(max)
}