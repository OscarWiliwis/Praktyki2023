
const checkStatus = (response) => 
{
    if (response.status == 200) 
    {
        return response.json(); 
    } 
    else 
    {
        throw new Error('Błąd w pobieraniu danych');
    }
}

const printPosts = (dataJSON) => 
{
    for (const post of dataJSON) 
    {
        console.log('Title:', post.title);
        console.log('Body:', post.body);
        console.log('\n');
    }
}

fetch('https://jsonplaceholder.typicode.com/posts') //bez errora
    .then(checkStatus)
    .then(printPosts)
    .catch(error => console.error('Wystąpił błąd:', error));

fetch('https://jsonplaceholder.typicode.com/posts2') //error
    .then(checkStatus)
    .then(printPosts)
    .catch(error => console.error('Wystąpił błąd:', error));