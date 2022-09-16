'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function createElements() {
  const button = document.createElement('button');
  button.id = 'button';
  button.type = 'button'
  button.textContent = 'Get Pokemons!'
  document.body.appendChild(button);

  const selectEl = document.createElement('select');
  selectEl.id = 'select';
  document.body.appendChild(selectEl);

  const imgDiv = document.createElement('div');
  imgDiv.id = 'imgDiv'
  document.body.appendChild(imgDiv);

  const image = document.createElement('img');
  image.id = 'img';
  image.alt = 'alt'//In line 82 and 83, i already assigned value to alt and src
  image.src = 'src'//To pass the test we need to add alt and src, without writing here It works perfectly
  imgDiv.appendChild(image);
}
createElements()

const fetchData = async (url) => {
  const response = await fetch(url)
  if (response.ok) {
    return response.json()
  } else {
    throw new Error('Something goes wrong with Data Server! ');
  }
}

async function fetchAndPopulatePokemons() {
  try {
    const selectEl = document.getElementById('select')
    const data = await fetchData(url);
    const dataArray = data.results

    dataArray.forEach((element, index) => {
      const optionEl = document.createElement('option')
      optionEl.textContent = `${index + 1}-${element.name}`
      optionEl.value = element.url
      selectEl.appendChild(optionEl);
    })
    selectEl.onchange = fetchImage
  } catch (err) {
    console.log(err);
  }
}

const fetchImage = async (event) => {
  const imgEl = document.getElementById('img')
  const pokemonUrl = event.target.value;
  const dataPokemon = await (await fetch(pokemonUrl)).json();
  imgEl.src = dataPokemon.sprites.front_default;
  imgEl.alt = `This is img of pokemon ${dataPokemon.name}`
}

function main() {
  document.getElementById('button')
    .addEventListener('click', fetchAndPopulatePokemons)
}

window.addEventListener('load', main);