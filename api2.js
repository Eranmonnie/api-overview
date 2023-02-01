//this is using async
const api = "https://dog.ceo/api/breeds/image/random";

const contain = document.querySelector(".dog-container"); 

async function automate(){

    const fetchdata = await fetch(api);
    const processedfetcheddata = await fetchdata.json();
    const image = document.createElement("img");
    image.src = processedfetcheddata.message;
    image.alt = "dog pictures";
    contain.appendChild(image);

}

document.querySelector(".dog-button").addEventListener("click", automate);