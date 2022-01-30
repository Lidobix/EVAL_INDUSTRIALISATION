/**
 * @file fetchPokeAbility.js est le programme de requêtes/réception de compétence de combat Pokemon à l"API.
 * @author VirtuoWorks
 */

/**
 * balise <p> qui contiendra le texte de réponse sur la page HTML
 * @type {HTMLElement} */
// const pokeP = document.getElementById('pokeInfo');
/**
 * Div à laquelle sera attachée PokeP
 * @type {HTMLElement} */
// const pokeDiv = document.getElementById('pokemon-info');
/**
 * Bouton d"attribution d"une compétence de combat du Pokémon
 * @type {HTMLElement} */
// const pokeAbilityBtn = document.getElementById('ability');

/**
 * Cette fonction envoie une reqûete à l"API pokeapi.co pour obtenir une compétence de combat,
 * choisie par son ID et renvoie un élément HTML (texte) affichant la réponse sur la page.
 * L"ID est construit à partir d"un nombre aléatoire.
 *
 * @function fetchPokemonAbilities
 * @returns {HTMLElement} Texte contenant la compétence de combat.
 *
 */
export const fetchPokemonAbilities = async () => {
  /**
   * ID de la compétence, construit à partir d"un nomnre aléatoire.
   * @type {number} */
  const pokedexNum = Math.floor(Math.random() * 266);
  /**
   * Réponse de l"API.
   * @type {string} */
  let foundAbilities = '';
  /**
   * balise <p> où sera affichée la compténce.
   * @type {HTMLElement} */
  const pokeAbility = document.getElementById('pokeAbility');
  /**
   * Bouton d"attribution d"une compétence de combat du Pokémon
   * @type {HTMLElement} */
  const pokeAbilityBtn = document.getElementById('ability');
  /**
   * Réponse de l"API convertie en JSON, contenant la compétence.
   * @type {object} */
  let jsonAbilities = {};
  /**
   * Compétence extraite de l"objet.
   * @type {string} */
  let abilityToDisplay = '';

  try {
    foundAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundAbilities) {
    try {
      jsonAbilities = await foundAbilities.json();
      if (jsonAbilities.name !== '' && undefined !== jsonAbilities.name) {
        abilityToDisplay = `${String(jsonAbilities.name)
          .slice(0, 1)
          .toUpperCase()}${String(jsonAbilities.name)
          .slice(1, jsonAbilities.name.length)
          .toLowerCase()}`;
      } else {
        abilityToDisplay = 'Tackle';
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonAbilities = 'No ability found...';
  }

  if (pokeAbility.innerText !== '') {
    pokeAbility.innerText = '';
  }

  pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
};
