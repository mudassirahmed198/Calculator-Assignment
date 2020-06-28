function getNumber (num) {
    
    var sum= document.getElementById('sum')
     sum.value += num
     
}

function clearResult(){
    var sum= document.getElementById('sum') 
    sum.value=""
}

function result(){
    var sum= document.getElementById('sum')
    sum.value= eval(sum.value)  
}