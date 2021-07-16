var clothes = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]];

var arr1 = [];

    
for(i=0; i< clothes.length; i++)
{
        
    arr1 = arr1.concat(clothes[i]);
  
}

for(i=0; i<arr1.length; i++)
{
        
    arr1.splice(i,1);    
      
}

const set = new Set(arr1);

const uniqueArr=[...set];



var j=1;

for(i=0; i<uniqueArr.length; i++)
{
  const result = arr1.filter(word=>word === uniqueArr[i]);


  j= (result.length+1)*j;
  
}

j=j-1;

console.log(arr1);
console.log(uniqueArr);
console.log(j);
alert(j);
