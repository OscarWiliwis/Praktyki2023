function fibonacci(x) 
{
    if(x == 0) 
    {
        return 0;
    }
    if(x == 1) 
    {
        return 1;
    }
    return fibonacci(x - 2) + fibonacci(x - 1);
}
console.log(fibonacci(6));