let result = document.getElementById("para")
console.log(result)

let resulttwo = document.getElementById("paratwo")
console.log(resulttwo)

let count =0
let counttwo=0
function one(){
    count = count+1
    result.innerText  = count 
    
}
function Two(){

    count = count+2
    result.innerText  = count 
    
}
function Three(){
    count = count+3
    result.innerText  = count 
    
}
function set(){
    count=0
    result.innerText  = count 

}
function one1(){
    counttwo = counttwo+1
    resulttwo.innerText  = counttwo    
}
function Two1(){
    counttwo = counttwo+ 2
    resulttwo.innerText  = counttwo

}
function Three1(){
    counttwo = counttwo+3
    resulttwo.innerText  = counttwo   
    
}
function set1(){
    counttwo = 0
    resulttwo.innerText  = counttwo  

}
