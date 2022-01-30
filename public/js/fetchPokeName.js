/**
 * @file fetchPokeName.js est le programme de requêtes/réception de nom de Pokemon à l"API.
 * @author VirtuoWorks
 */

import { pokeP, pokeAbilityBtn } from '../main.js';

export const fetchPokemon = async () => {
    /**
   * balise <p> qui contiendra le texte de réponse sur la page HTML
   * @type {HTMLElement} */
  //  const pokeP = document.getElementById('pokeInfo');

  /**
   * ID du Pokemon
   * @type {number} */
  const pokedexNum = Math.floor(Math.random() * 897);
  /**
   * Réponse de l"API
   * @type {string} */
  let foundPokemon = '';
  /**
   * Réponse de l"API convertie en JSON
   *  @type {string} */
  let jsonPokemon = '';
  /**
   * Objet contenant le nom du Pokemon
   * @type {object}
   * @property {string} pokeInfo.name */
  const pokeInfo = {};

  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundPokemon) {
    try {
      jsonPokemon = await foundPokemon.json();
      pokeInfo.name = `${String(jsonPokemon.species.name)
        .slice(0, 1)
        .toUpperCase()}${String(jsonPokemon.species.name)
        .slice(1, jsonPokemon.species.name.length)
        .toLowerCase()}`;
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonPokemon = 'No Pokémon found...';
  }

  if (pokeP.innerText !== '') {
    pokeP.innerText = '';
  }
  pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
  pokeAbilityBtn.removeAttribute('disabled');
};
