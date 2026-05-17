
/**
 * Categories for art topic generation
 * @type {Object}
 * @property {string[]} medium - List of art mediums
 * @property {string[]} mediaGenre - List of media genres
 * @property {Object} subject - Subject categories
 * @property {Object} style - Style categories
 * 
 * SYMBOLS:
 * @ - No article needed.
 * # - Article "The" is needed.
 * if there is no symbol at all the default article is "A" or "An" depending on the word.
 */

export const categories = {
    medium: [
        "Sketch", 
        "Doodle", 
        "Illustration", 
        "Painting"
    ],
    mediaGenre: [
        "Games", 
        "Anime", 
        "Movies", 
        "Comics", 
        "Real_Life"
    ],
    subject: {
        games: {
            characters: [
                "@Link (The Legend of Zelda)", 
                "@Mario (Super Mario)", 
                "@Sonic (Sonic the Hedgehog)",
                "@Pikachu (Pokemon)",
                "@Gustave (Clair Obscur)",
                "@Maelle (Clair Obscur)",
                "#Paintress (Clair Obscur)",
                "@Renoir (Clair Obscur)",
                "@Verso (Clair Obscur)",
                "@Amy Rose (Sonic the Hedgehog)",
                "@Tails 'Miles' Prower (Sonic the Hedgehog)",
                "@Knuckles (Sonic the Hedgehog)",
                "@Shadow (Sonic the Hedgehog)",
                "@Dr. Eggman (Sonic the Hedgehog)",
                "@Luigi (Super Mario)",
                "@Princess Peach (Super Mario)",
                "@Bowser (Super Mario)",
                "@Yoshi (Super Mario)",
                "@Zelda (The Legend of Zelda)",
                "@Sheik (The Legend of Zelda)",
                "@Pit (Kid Icarus)",
                "@Palutena (Kid Icarus)",
                "@Navi (The Legend of Zelda)",
                "@Ganondorf (The Legend of Zelda)",
                "@Midna (The Legend of Zelda)",
                "@Charmander (Pokemon)",
                "@Squirtle (Pokemon)",
                "@Bulbasaur (Pokemon)",
                "@Sneasel (Pokemon)",
                "@Gengar (Pokemon)",
                "@Greninja (Pokemon)",
                "@Gyarados (Pokemon)",
                "@Kangaskhan (Pokemon)",
                "@Kadabra (Pokemon)",
                "@Jigglypuff (Pokemon)",
                "@Eevee (Pokemon)",
                "@Any Pokemon",
                "@Any Eeveelution",
                "@Any Starter Pokemon",
                "@Agumon (Digimon)",
                "@Gabumon (Digimon)",
                "@Guilmon (Digimon)",
                "@Gatomon / Tailmon (Digimon)",
                "@Angemon (Digimon)",
                "@Angewomon (Digimon)",
                "@Gallantmon (Digimon)",
                "@Any Digimon",
                "@Zagreus (Hades)",
                "@Hades (Hades)",
                "@Persephone (Hades)",
                "@Megaera (Hades)",
                "@Alecto (Hades)",
                "@Tisiphone (Hades)",
                "@Aegiomon (Digimon)",
                "@Dante (Devil May Cry)",
                "@Dante (Limbus Company)",
                "@Kratos (God of War, any period)",
                "@Atreus (God of War, any period)",
                "@Tevi (TEVI)",
                "@Vena (TEVI)",
                "@Lifmunk (Palworld)",
                "@Depresso (Palworld)",
                "@Tocotoco (Palworld)",
                "@Chillet (Palworld)",
                "@Any Pal (Palworld)",
                "@Celeste (Celeste)",
                "@Lea (Crosscode)",
            ],
            fictional_location: [
                "@Hyrule (The Legend of Zelda)", 
                "@The Mushroom Kingdom (Super Mario)", 
                "@The Green Hill Zone (Sonic the Hedgehog)",
                "@The Indigo Plateau (Pokemon)",
                "@Lorule (The Legend of Zelda)",
                "@Whirlpool Islands (Pokemon)"
            ],
            weapons: [
                "#Master Sword (The Legend of Zelda)", 
                "Fire Flower (Super Mario)", 
                "@Someone doing a Spin Attack from Sonic the Hedgehog"
            ],
            special_items: [
                "Rupees (The Legend of Zelda)", 
                "Mushroom (Super Mario)", 
                "@one of Sonic the Hedgehog's Power-ups"
            ],
        },
        anime: {
            characters: [
                "@Goku from Dragon Ball", 
                "@Naruto from Naruto", 
                "@Saitama from One Punch Man",
                "@Eren Yeager from Attack on Titan",
                "@Guts from Berserk",
                "@Light Yagami from Death Note",
                "@Lelouch Lamperouge from Code Geass",
                "@Itachi Uchiha from Naruto",
                "@Sasuke Uchiha from Naruto",
                "@Sakura Haruno from Naruto",
                "@Kurapika from Hunter x Hunter",
                "@Hisoka Morow from Hunter x Hunter",
                "@Gon Freecss from Hunter x Hunter",
                "@Killua Zoldyck from Hunter x Hunter",
                "@Inuyasha from Inuyasha",
                "@Kagome Higurashi from Inuyasha",
                "@Miroku from Inuyasha",
                "@Shippou from Inuyasha",
                "@Kikyo from Inuyasha",
                "@Sango from Inuyasha",
                "@Sesshomaru from Inuyasha",
                "@Griffith from Berserk",
                "@Jotaro Kujo from JoJo's Bizarre Adventure",
                "@Josuke Higashikata from JoJo's Bizarre Adventure",
                "@Dio Brando from JoJo's Bizarre Adventure",
                "@Jonathan Joestar from JoJo's Bizarre Adventure",
                "@Joseph Joestar from JoJo's Bizarre Adventure",
                "@Jolyne Cujoh from JoJo's Bizarre Adventure",
                "@Speedwagon from JoJo's Bizarre Adventure",
                "@Judeau from Berserk",
                "@Ainz Ooal Gown from Overlord",
                "@Albedo from Overlord",
                "@Cocytus from Overlord",
                "@Shalltear Bloodfallen from Overlord"
            ],
            fictional_location: [ 
                "@Konoha (Naruto)", 
                "@Z-City (One-Punch Man)",
                "@West City (Dragon Ball)",
                "@Kami's Lookout (Dragon Ball)",
                "@Beerus' Planet (Dragon Ball)",
                "@Planet Namek (Dragon Ball)",
                "@Tournament of Power (Dragon Ball)",
                "@Capsule Corp (Dragon Ball)",
                "@The hidden Sand Village (Naruto)",
                "@Greed Island (Hunter x Hunter)",
                "@Chimera Ants' Palace (Hunter x Hunter)",
                "@The Phantom Troupe's Hideout (Hunter x Hunter)",
                "@The bone eater's Well (Inuyasha)",
                "@Higurashi Shrine (Inuyasha)",
                "@Kaede's Village (Inuyasha)",
                "@Little Garden (One Piece)",
                "@Skypiea (One Piece)",
                "@Water 7 (One Piece)",
                "@Impel Down (One Piece)",
                "@Whole Cake Island (One Piece)",
                "@Sabaody Archipelago (One Piece)",
                "@Fantasia (Berserk)",
                "@The Abyss (Berserk)",
                "@Kushan (Berserk)",
                "@Shiganshina (Attack on Titan)",
                "@Capital Mitras (Attack on Titan)",
                "@Underground (Attack on Titan)",
                "@Fort Salta (Attack on Titan)"
            ],
            weapons: [
                "@Someone using a Kamehameha", 
                "@Someone using the Shadow Clone Jutsu", 
                "@Someone using Destructo Discs",
                "@Someone using Special Beam Cannon",
                "@Someone using eye powers, magical, supernatural anything",
                "@Someone using Guts' sword",
                "#Staff of Ainz Ooal Gown",
                "@Inuyasha's Sword, Tessaiga",
                "@Omnidirectional Mobility Gear (ODM) from Attack on Titan, optionally with Swords",
                "@Sesshomaru's sword, Tenseiga",
                "@Miroku's staff",
                "@Sango's Boomerang",
                "@Someone using a kunai"
                
            ],
            special_items: [
                "#Dragon Balls",
                "#Death Note",
                "@Someone powering up, via transformation",
                "@Saitama's Gloves", 
            ],
        },
        movies: {
            characters: [
                "@Luke Skywalker from Star Wars", 
                "@Harry Potter from Harry Potter", 
                "@Iron Man from Iron Man"
            ],
            fictional_location: [
                "@Tatooine", 
                "@Hogwarts", 
                "@Stark Tower"
            ],
            weapons: [
                "Lightsaber", 
                "Wand", 
                "#Repulsor Suit"
            ],
            special_items: [
                "#Death Star Plans", 
                "#Elder Wand", 
                "#Arc Reactor"
            ],
        },
        comics: {
            characters: [
                "@Spider-Man from The Amazing Spider-Man", 
                "@Batman from Batman & Robin", 
                "@Superman from The man of steel"
            ],
            fictional_location: [
                "Somewhere in Staten Island from the Spider-Man comics", 
                "Someplace in Gotham City", 
                "Somewhere in, or around Metropolis"
            ],
            weapons: [
                "Web Shooter", 
                "Batarang", 
                "@Heat Vision"
            ],
            special_items: [
                "@Someone with Spider Sense", 
                "@Batman's Utility Belt", 
                "@Someone with Super Strength"
            ],
        },
        real_life:{
            real_location: [
                "Something in, or from Paris", 
                "Something in, or from New York", 
                "Something in, or from Tokyo"
            ],
            landmark: [
                "#Eiffel Tower", 
                "#Statue of Liberty", 
                "#Tokyo Tower"
            ],
            },

    },
    style: {
        artist: [
            "@Pablo Picasso", 
            "@Vincent van Gogh", 
            "@Bob Ross", 
            "@Andonoz"
        ],
        genre: [
            "Futuristic", 
            "Cyberpunk", 
            "Steampunk", 
            "Sci-fi", 
            "Fantasy", 
            "Anime", 
            "Manga", 
            "Urban", 
            "Gothic", 
            "Realistic", 
            "Western cartoon style from 40s-2000s", 
            "Pop Art", 
            "Wild-west", 
            "Watercolour", 
            "Fighting scene", 
            "Portrait", 
            "Action scene",
            "Photorealistic", 
            "Renaissance painting"
        ],
    }
}

