function calculate(operator, liczba1, liczba2) 
{
    switch (operator)
     {
      case '+':
        return liczba1 + liczba2;
      case '-':
        return liczba1 - liczba2;
      case '*':
        return liczba1 * liczba2;
      case '/':
        if (liczba2 !== 0) 
        {
          return liczba1 / liczba2;
        } else 
        {
          return "Nie dziel przez 0";
        }
    }
  }
  function wyniki() 
  {
    var liczba1 = parseFloat(document.getElementById("liczba1").value);
    var liczba2 = parseFloat(document.getElementById("liczba2").value);
    var operator = document.getElementById("operator").value;
    var wynik2 = calculate(operator, liczba1, liczba2);
    wynik1.innerHTML = wynik2;
}