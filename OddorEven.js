function oddoreven(){
 for (let i = 0 ; i<=num ;i++)   {
    if(i%2 == 0)
    {
        console.log("The number is even : "+ i)
    }
    else
    {
        console.log("The number is odd : " + i)
    }
 }
}
let num = 15
oddoreven(num)