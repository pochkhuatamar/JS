function fetchData() {
fetch (`https://fakerapi.it/api/v1/books?_quantity=20`)
    .then(response => {
        if(!response.ok)  {
          throw Error("Error");
        }
        return response.json();
     })
    .then(finalData => {
        console.log(finalData.data);
        const html = finalData.data.map( user => {
            return `
            <div class= "user" >
            <p><img src="images/1page4.png"> </p>
            <p>Title: ${user.title} </p>
            <p>author: ${user.author}</p>
            <p>genre: ${user.genre}</p>
            <p>description: ${user.description}</p>
            </div>`
            
        })
        .join("");
        console.log(html)
        document
        .querySelector(`#app`)
        .innerHTML = ("aftergein",html);
     }) 
    .catch(error => {
        console.log(error)
     });
}

fetchData();

