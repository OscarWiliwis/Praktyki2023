function sortNumbers(tab) 
{
    const n = tab.length;
  
    for(let i = 0; i < n - 1; i++) 
    {
      for(let j = 0;j< n - i - 1;j++) 
      {
        if(tab[j]>tab[j + 1]) 
        {
          let temp = tab[j];
          tab[j] = tab[j + 1];
          tab[j + 1] = temp;
        }
      }
    }
    return tab;
}
  
  function sortStrings(tab)
{
    const n = tab.length;
    for(let i = 1;i < n;i++) 
    {
      let temp = tab[i];
      let j = i - 1;
  
      while(j >= 0 && temp.length < tab[j].length) 
      {
        tab[j + 1] = tab[j];
        j--;
      }
      tab[j + 1] = temp;
    }
    return tab;
}
  
  function secondBiggest(tab) 
  {
    const sortedtabay = sortNumbers(tab);
    return sortedtabay[sortedtabay.length - 2];
  }
  
  function secondLongest(tab) 
  {
    const sortedtabay = sortStrings(tab);
    return sortedtabay[sortedtabay.length - 2];
  }
  
  function arrays() 
{
    const input = document.getElementById("elementyTab").value;
    const tab = input.split(",");
  
    if(tab.length < 2)
    {
      document.getElementById("wynik").innerHTML = 'Podaj co najmniej 2 elementy';
      return;
    }
  
    if(typeof tab[0] === "number") 
    {
        document.getElementById("wynik").innerHTML = secondBiggest(tab);
    } 
    else if(typeof tab[0] === "string") 
    {
        document.getElementById("wynik").innerHTML = secondLongest(tab);
    } 
    else 
    {
      console.log("Nieprawidłowy typ danych");
    }
}