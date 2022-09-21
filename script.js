// Generate an array between two integers of 1 step length : 

//assuming start and end in a function to print integers
function range(start, end){

    //if start is greater than end move to for i loop
    if(start>end){
        let arr = new Array(start - end +1);
        for(let i=0;i<arr.length; i++,start--){
            result[i] = start;
        }
        return arr;
    }

    //otherwise else statement
    else{
        let array = new Array(end - start + 1);
        for(let j=0; j<array.length;j++,start++){
            array[j] = start;
        }
        return array;
    }
}

console.log(range(3,7));//[3,4, 5, 6, 7]
console.log(range(-4,7));//[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]


// 2. FInd the most frequent item of an array

//assuming array and its values
let arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
let ab = 1;
let a = 0;
let item;//assuming alphates as item

//for loop for i block and passing values
for(let i=0;i<arr1.length;i++){
    for (let j=i;j<arr1.length;j++){
        //comparing array is equal
        if(arr1[i] == arr1[j]){
            a++;
        }
        if(ab<a){
            ab = a;
            item = arr1[i];
        }
    }
    a= 0;
}

console.log(item+" ( " +ab +" times ) ") ;
//Output : q(5times)