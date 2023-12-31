let id = 1;
let h1 = null;
let h2 = null;
let div = null;

const genText = () =>
 {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => 
      {
        if (!response.ok) 
        {
          throw new Error("Network response was not ok.");
        } else 
        {
          return response.json();
        }
      })
      .then((myJson) => 
      {
        const idJson = myJson.filter((post) => post.id == id)[0];
        if ((h1 == null) && (h2 == null) && (div == null)) 
        {
            h1 = document.createElement("h1");
            h2 = document.createElement("h2");
            div = document.createElement("div");
        }

        h2.textContent = id;
        document.querySelector("body").appendChild(h2)

        h1.textContent = idJson["title"];
        document.querySelector("h2").appendChild(h1);

        div.textContent = idJson["body"];
        document.querySelector("h1").appendChild(div);
      })
      .catch((error) => console.error("Error: ", error))
}

const next = () =>
 {
    id++;
    genText();
}

const previous = () => 
{
    if (id == 1) 
    {
        console.log("ID cant be lower");
    } else 
    {
        id--;
        genText();
    }
}