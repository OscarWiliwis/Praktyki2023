var tab1 = [1, 3, 5, 7, 9];
var tab2 = [2, 4, 6, 8, 10];

console.log("Tablica 1: ")
for(i=0; i<tab1.length; i++) 
{
    console.log(tab1[i]);
}

console.log("Tablica 2: ")
for(i=0; i<tab2.length; i++) 
{
    console.log(tab2[i]);
}

tabRazem = [];
for(i=0; i<5;i++) 
{
	tabRazem[i] = tab1[i];
}
for(i=0; i<5;i++) 
{
	tabRazem[i+5] = tab2[i];
}

console.log("Tablice razem: ")
for(i=0; i<tabRazem.length; i++) 
{
    console.log(tabRazem[i]);
}