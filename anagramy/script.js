function sort(tab) {
    tab = tab.split("");
    for(i = 0;i<tab.length;i++)
     {
      for(j = 0;j<tab.length;j++) 
      {
        if(tab[j]>tab[i]) {
          temp = tab[i];
          tab[i] = tab[j];
          tab[j] = temp;
        }
      }
    }
    return tab.join("");
  }
  
  function areAnagrams(str1, str2) 
  {
    if(str1.length != str2.length) 
    {
      return false;
    }
  
    str1 = sort(str1);
    str2 = sort(str2);
  
    for(let i = 0;i<str1.length;i++) 
    {
      if(str1[i] != str2[i]) 
      {
        return false;
      }
    }
    return true;
  }
  
  function anagrams() 
  {
    str1 = document.getElementById("input1").value;
    str2 = document.getElementById("input2").value;
  
    if(areAnagrams(str1, str2)) 
    {
        document.getElementById("wynik").innerHTML = "To anagramy";
    } 
    else 
    {
        document.getElementById("wynik").innerHTML = "To nie anagramy";
    }
  }