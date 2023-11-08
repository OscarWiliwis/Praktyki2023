function reccurention(x,y) 
{
    console.log(y)
    if(x!=y)
    {
        reccurention(x,y-1)
    }
}
reccurention(8,11)