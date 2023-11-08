function  palindrome(wyraz) 
{
    wyraz = wyraz.replace(/\s/g, '').toLowerCase();
    return wyraz === wyraz.split('').reverse().join('');
}

function sprawdz() 
{
    var slowo = document.getElementById('slowo').value;

    if (palindrome(slowo)) 
    {
        wynik.innerHTML= 'Jest palindromem';
    } 
    else
    {
        wynik.innerHTML= 'Nie jest palindromem';
    }
}