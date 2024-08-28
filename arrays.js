const strudent = ['first','second','third','four','five'];
// strudent.push('six');
// console.log(strudent)
// console.log(strudent.indexOf('second'));
// strudent.pop();
// console.log(strudent);
// strudent.reverse();
// console.log(strudent);

// advance array 

// strudent.forEach((val)=>{console.log(val)});

const numbers = [1,2,3,4,5,6,7];
//1. create a new array and add value double 
// 1.1
// let num =[];
// let newArr1 = numbers.forEach((val)=>{ num.push(val*2)});
// console.log(num); 

// 1.2
// let num =[];
// let newArr1 = numbers.forEach(function(val){ num.push(val*2)});
// console.log(num);

// 1.3
// let num =[];
// let newArr1 = numbers.forEach(first);
// function first(val){
//  num.push(val*2);
// }
// console.log(num);


// 2. create a new array and add value double 
// 2.1
// let newArr = numbers.map(double);
// function double(n){
//    return  n*2;
// }
// console.log(newArr);

// find element using find function in array 
// let find_number = numbers.find((num)=>num===4);
// console.log(find_number);

// find element index  using findIndex function in array 
// let find_index = numbers.findIndex((num)=>num===4);
// console.log(find_index);

// find element boolean value  using includes function in array 
// let find_boolean_value = numbers.includes(2);
// console.log(find_boolean_value);

//  find a even number  using filter function in array 
// const get_even_number = numbers.filter((num)=> num % 2 === 0) 
// console.log(get_even_number);

// find a array part using slice function
// let slice_method = numbers.slice(1,4);
// console.log(slice_method);

// remove a element in array using splice function 
// let splice_method = numbers.splice(0,2);
// console.log(splice_method);
// console.log(numbers);