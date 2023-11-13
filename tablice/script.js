function Second() {

  const tab = ["Oscar", "Filip", "Krystian"]; 
  const tab2 = [1, 3, 5];
  let numer;
  let numer1;

  if (typeof tab[0] === 'string') { 
      for (let i = 0; i <= tab.length; i++) 
      {
          const wynik = tab.sort((a, b) => b.length - a.length);
          console.log(wynik[1]);
      }
  }

  else if (typeof tab[0] === 'number') 
  {
      for (let i = 0; i <= tab.length; i++) 
      {
          tab.sort();
          tab.reverse();
          numer = tab[1];
      }
      console.log(numer);
  }

  if (typeof tab2[0] === 'string') 
  { 
      for (let i = 0; i <= tab2.length; i++) 
      {
          const wynik = tab2.sort((a, b) => b.length - a.length);
          console.log(wynik[1]);
      }
  } 

  else if (typeof tab2[0] === 'number')
   {
      for (let i = 0; i <= tab2.length; i++) 
      {
          tab.sort();
          tab.reverse();
          numer1 = tab2[1];
      }
      console.log(numer1);
  }
}