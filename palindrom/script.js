function palindrome(form)
{
    let word = document.getElementById('slowo').value;
    let reverse_word = "";

    for(let i=word.length-1;i>=0;i--)
    {
        reverse_word+=word[i];
    }

    if(word==reverse_word)
    {
        document.getElementById("wynik").innerHTML = "To palindrom";
    }
    else
    {
        document.getElementById("wynik").innerHTML = "To nie palindrom";
    }
}