// high order function and callback 

function add(a,b,cb){
 let result = a+b;
 cb(result)
 return  second = ()=>(result);

}


add(3,4,(val)=>{ console.log(val)});
console.log(second());
add(4,5,showresult);
function showresult(result){
    console.log(result);
}
