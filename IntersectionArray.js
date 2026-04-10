let arr1 = [1, 2, 3 ,4 ,5 ];
let arr2 = [3, 4, 5 , 6 ,7];
function findCommonElements(arr1, arr2) {
    
let commonElements = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            commonElements.push(arr1[i]);
        } 
    }
}
  return { commonElements };
}

console.log(findCommonElements(arr1, arr2));