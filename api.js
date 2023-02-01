const api = "https://dog.ceo/api/breeds/image/random";

const contain = document.querySelector(".dog-container"); 

function automate()
{

    const fetchdata = fetch(api);

    fetchdata
    .then(function (response){

        const dog = response.text();
        return dog;

    })
    .then(function (dog){

        const doggo = JSON.parse(dog);
        const image = document.createElement("img");
        image.src = doggo.message;
        image.alt = "dog pictures";
        contain.appendChild(image);

    });


}





document.querySelector(".dog-button").addEventListener("click", automate);