const num = [2,4,7,8,11,14]
const target = 18        
results = []    
for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] + num[j] === target) {
            results.push([i, j]);
            break; // Exit the inner loop once a pair is found
        }
    }
}
console.log(results)