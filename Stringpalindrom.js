let original = "madam"
let reverse = ""
function palindrome()
{
    for (let i = original.length-1; i>=0 ; i--)
    {
        reverse = reverse + original[i]
    }
    if(original === reverse)
    {
        console.log("The given string is palidrome : " + original)
    }
    else
    {
        console.log("The given string is not a palindrome : " + original)
    }
}
palindrome(original)