let num = [15, -7, 0 , 23 , -3]
function positiveorNegative(){
    for (let i = 0 ; i< num.length; i++)
    {
        let currentNum = num[i]
        if(currentNum > 0)
        {
            console.log ("The number is positive: " + currentNum)
        }
        else if (currentNum<0)
        {
            console.log ("The number is negative: " + currentNum)
        }
        else{
            console.log ("The number is zero: " + currentNum)
        }
    }
}
positiveorNegative(num)