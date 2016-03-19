var index;
var myArray = [];
for (index = 1; index < 20 ; index++ )
{
    if ( index % 3 === 0)
        continue;
    if (index % 2 === 0)
    {
        myArray.push(index);
    }
}
    
console.log(myArray);

// Bonus Question: What will be returned by the function call?
function fibo(index){
    if (index === 0 || index === 1)
    {
        return 1;
    }
    else
    {
        return fibo(index-1) + fibo(index-2);
    }
}    

// what is the result of this function call?        
fibo(4)
