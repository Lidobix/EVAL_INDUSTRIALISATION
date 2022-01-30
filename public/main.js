/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/**
 * @file main.js est le logiciel serveur local.
 * @author VirtuoWorks
 */

import { fetchPokemon } from './js/fetchPokeName.js';
import { fetchPokemonAbilities } from './js/fetchPokeAbility.js';
/**
 * balise <p> qui contiendra le texte de réponse sur la page HTML
 * @type {HTMLElement} */
const pokeP = document.getElementById('pokeInfo');
/**
 * Bouton d"attribution d"une compétence de combat du Pokémon
 * @type {HTMLElement} */
const pokeAbilityBtn = document.getElementById('ability');

export { pokeP, pokeAbilityBtn };

window.addEventListener('DOMContentLoaded', () => {
  /**
   * Div à laquelle sera attachée PokeP
   * @type {HTMLElement} */
  const pokeDiv = document.getElementById('pokemon-info');

  /**
   * Cette fonction appelle la fonction de requête de Pokemon,
   * et affiche le texte reçu par cette dernière
   *
   * @function invoquePokemon
   */
  const invoquePokemon = () => {
    /**
     * Bouton "chox de Pokemon" de la page HTML.
     * @type {HTMLElement} */
    const pokeBtn = document.getElementById('pokemon');
    pokeBtn.addEventListener('click', fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };
  /**
   * Cette fonction appelle la fonction de requête de compétence,
   *  et affiche le texte reçu par cette dernière
   *
   * @function pokemonAbility
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
    // eslint-disable-next-line no-undef
    pokeDiv.appendChild(pokeAbility);
  };
  /**
   * IIFE qui lance les fonctions de demande de Pokemon et de compétence quand le DOM est chargé.
   *
   * @function startAll
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  }());
});
