const urlType = 'https://pokeapi.co/api/v2/type/';
const urlGeneration = 'https://pokeapi.co/api/v2/generation/';
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

const colors = [
    {
        nombre: 'flying',
        color: '#98A8F0',
    },
    {
        nombre: 'normal',
        color: '#A8A090',
    },
    {
        nombre: 'poison',
        color: '#B058A0',
    },
    {
        nombre: 'ground',
        color: '#E9D6A4',
    },
    {
        nombre: 'rock',
        color: '#B8A058',
    },
    {
        nombre: 'bug',
        color: '#A8B820',
    },
    {
        nombre: 'ghost',
        color: '#6060B0',
    },
    {
        nombre: 'steel',
        color: '#A8A8C0',
    },
    {
        nombre: 'fire',
        color: '#F05030',
    },
    {
        nombre: 'water',
        color: '#3899F8',
    },
    {
        nombre: 'grass',
        color: '#78C850',
    },
    {
        nombre: 'electric',
        color: '#F8D030',
    },
    {
        nombre: 'psychic',
        color: '#F870A0',
    },
    {
        nombre: 'ice',
        color: '#58C8E0',
    },
    {
        nombre: 'dragon',
        color: '#7860E0',
    },
    {
        nombre: 'dark',
        color: '#7A5848',
    },
    {
        nombre: 'fairy',
        color: '#E79FE7',
    },
    {
        nombre: 'fighting',
        color: '#A05038',
    },
    {
        nombre: 'unknown',
        color: '#696969',
    },
    {
        nombre: 'shadow',
        color: '#000000',
    }
]
 

async function proccessRequestAsync(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}