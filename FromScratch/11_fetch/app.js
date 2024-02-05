const POKE_URL = "https://pokeapi.co/api/v2/pokemon/k";
// fetch(POKE_URL);
async function getPokemon() {
  try {
    const response = await fetch(POKE_URL);

    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
getPokemon();

fetch(POKE_URL)
  .then((response) => {
    console.log("The Fetch worked!!");
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("Something went wrong with the fetch call!");
    console.log(e);
  });
