const num = [2,4,5,2,1,2]
count = 0
k = 2
for (let i = 0; i < num.length; i++) {
    if (num[i] === k) {
        count++
    }
}
console.log(count)