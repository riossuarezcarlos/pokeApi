const urlType = 'https://pokeapi.co/api/v2/type/';
const urlGeneration = 'https://pokeapi.co/api/v2/generation/';
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

const colors = {
    normal:	'#A8A090',
    flying:	'#98A8F0',
    poison:	'#B058A0',
    ground:	'#E9D6A4',
    rock:	'#B8A058',
    bug:	'#A8B820',
    ghost:	'#6060B0',
    steel:	'#A8A8C0',
    fire:	'#F05030',
    water:	'#3899F8',
    grass:	'#78C850',
    electric:	'#F8D030',
    psychic:	'#F870A0',
    ice:	'#58C8E0',
    dragon:	'#7860E0',
    dark:	'#7A5848',    
    fairy:	'#E79FE7',
    fighting:	'#A05038'
}

const pokeColor = Object.keys(colors);

console.log(colors.find("fire"));

async function proccessRequestAsync(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}