
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
 */
export const categories = {
    medium: ["Sketch", "Doodle", "Illustration", "Painting"],
    mediaGenre: ["Games", "Anime", "Movies", "Comics", "Real"],
    subject: {
        games: {
            characters: ["@Link from Zelda", "@Mario from Super Mario", "@Sonic from Sonic the Hedgehog"],
            fictional_location: ["@Hyrule", "@The Mushroom Kingdom", "@The Green Hill Zone"],
            weapons: ["#Master Sword", "Fire Flower", "@Someone doing a Spin Attack from Sonic the Hedgehog"],
            items: ["Rupees from Zelda", "Mushroom from Super Mario", "@one of Sonic the Hedgehog's Power-ups"],
        },
        anime: {
            characters: ["@Goku from Dragon Ball", "@Naruto from Naruto", "@Saitama from One Punch Man"],
            fictional_location: ["@Namek (Dragon Ball)", "@Konoha (Naruto)", "@Plutia (One-Punch Man)"],
            weapons: ["@Someone using a Kamehameha", "@Someone using the Shadow Clone Jutsu", "@Someone using One Punch! From One Punch Man"],
            items: ["#Dragon Balls", "A Hand Sign",],
        },
        movies: {
            characters: ["@Luke Skywalker from Star Wars", "@Harry Potter from Harry Potter", "@Iron Man from Iron Man"],
            fictional_location: ["@Tatooine", "@Hogwarts", "@Stark Tower"],
            weapons: ["Lightsaber", "Wand", "#Repulsor Suit"],
            items: ["#Death Star Plans", "#Elder Wand", "#Arc Reactor"],
        },
        comics: {
            characters: ["@Spider-Man from The Amazing Spider-Man", "@Batman from Batman & Robin", "@Superman from The man of steel"],
            fictional_location: ["Somewhere in Staten Island from the Spider-Man comics", "Someplace in Gotham City", "Somewhere in, or around Metropolis"],
            weapons: ["Web Shooter", "Batarang", "@Heat Vision"],
            items: ["@Someone with Spider Sense", "@Batman's Utility Belt", "@Someone with Super Strength"],
        },
        real:{
            real_location: ["Something in, or from Paris", "Something in, or from New York", "Something in, or from Tokyo"],
            landmark: ["#Eiffel Tower", "#Statue of Liberty", "#Tokyo Tower"],
        },

    },
    style: {
        artist: ["@Pablo Picasso", "@Vincent van Gogh", "@Bob Ross", "@Andonoz"],
        genre: ["Futuristic", "Cyberpunk", "Steampunk", "Sci-fi", "Fantasy", 
            "Anime", "Manga", "Urban", "Gothic", "Realistic", "Western cartoon style from 40s-2000s", 
            "Pop Art", "Wild-west", "Watercolour", "Fighting scene", "Portrait", "Action scene",
            "Photorealistic", "Renaissance painting"],
    }
}

