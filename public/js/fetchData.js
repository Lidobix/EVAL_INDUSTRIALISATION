/**
 * @file fetchData.js est le programme de requêtes/réceptions d"informations Pokemon à l"API.
 * @author VirtuoWorks
 */

window.addEventListener('DOMContentLoaded', () => {
  /**
   * balise <p> qui contiendra le texte de réponse sur la page HTML
   * @type {HTMLElement} */
  const pokeP = document.getElementById('pokeInfo');
  /**
   * Div à laquelle sera attachée PokeP
   * @type {HTMLElement} */
  const pokeDiv = document.getElementById('pokemon-info');
  /**
   * Bouton d"attribution d"une compétence de combat du Pokémon
   * @type {HTMLElement} */
  const pokeAbilityBtn = document.getElementById('ability');
  /**
   * Cette fonction envoie une reqûete à l"API pokeapi.co pour obtenir
   *  les infos d"un Pokemon choisi par son ID et renvoie un élément
   * HTML (texte) contenant le nom du Pokémon.
   * L"ID est construit à partir d"un nombre aléatoire.
   *
   * @function fetchPokemon
   * @returns {HTMLElement} Texte contenant le nom du Pokemon
   */
  const fetchPokemon = async () => {
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
      foundPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    } catch (error) { console.error(error.message); }

    if (foundPokemon) {
      try {
        jsonPokemon = await foundPokemon.json();
        pokeInfo.name = `${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1, jsonPokemon.species.name.length).toLowerCase()}`;
      } catch (error) { console.error(error.message); }
    } else { jsonPokemon = 'No Pokémon found...'; }

    if (pokeP.innerText !== '') { pokeP.innerText = ''; }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute('disabled');
  };
  /**
   * Cette fonction envoie une reqûete à l"API pokeapi.co pour obtenir une compétence de combat,
   * choisie par son ID et renvoie un élément HTML (texte) affichant la réponse sur la page.
   * L"ID est construit à partir d"un nombre aléatoire.
   *
   * @function fetchPokemonAbilities
   * @returns {HTMLElement} Texte contenant la compétence de combat.
   *
   */
  const fetchPokemonAbilities = async () => {
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
     * Réponse de l"API convertie en JSON, contenant la compétence.
     * @type {object} */
    let jsonAbilities = {};
    /**
     * Compétence extraite de l"objet.
     * @type {string} */
    let abilityToDisplay = '';

    try {
      foundAbilities = await fetch(`https://pokeapi.co/api/v2/ability/${pokedexNum}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    } catch (error) { console.error(error.message); }

    if (foundAbilities) {
      try {
        jsonAbilities = await foundAbilities.json();
        if (jsonAbilities.name !== '' && undefined !== jsonAbilities.name) {
          abilityToDisplay = `${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1, jsonAbilities.name.length).toLowerCase()}`;
        } else { abilityToDisplay = 'Tackle'; }
      } catch (error) { console.error(error.message); }
    } else { jsonAbilities = 'No ability found...'; }

    if (pokeAbility.innerText !== '') { pokeAbility.innerText = ''; }

    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
  };
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
