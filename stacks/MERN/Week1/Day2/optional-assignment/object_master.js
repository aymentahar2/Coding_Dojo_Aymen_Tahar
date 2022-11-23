const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

    
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

// console.log(bListPkmn);

// const bListPkmn = pokémon.filter( p => p.id % 3 == 0 );
// console.log(bListPkmn);

// const fireelement = pokémon.filter( (pk) => {
//    for (let i = 0; i < pk.types.length; i++) {
//     return pk.types[i] == "fire";}
//    })
//    console.log(fireelement);

// const moretype = pokémon.filter( type => type.types.length > 1 );
// console.log(moretype);

// const pkmname = pokémon.map( p => p.name );
// console.log(pkmname);

// const pokémonnmetwo = pokémon.filter( k => k.id >99 ).map(k=>k.name );
// console.log(pokémonnmetwo);

// const poisonele = pokémon.filter( (pp) =>  pp.types == "poison" ).map( (pp) => pp.name );


//    console.log(poisonele);



// const pkmtype = pokémon.filter( (pp) =>  pp.types[1] == "flying" ).map( (pp) => pp.types[0] );


//    console.log(pkmtype);


const countpkm = pokémon.filter ((pp) => pp.types =="normal").length
console.log(countpkm);

const countpkm2 = pokémon.filter ((pp) =>{
    for (let i = 0; i < pokémon.length; i++){
    pp.types[i] =="normal"
    }
    })

console.log(countpkm2);





