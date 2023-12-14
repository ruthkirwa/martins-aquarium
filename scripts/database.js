/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
           image: "images/alligator gar.webp",
            name: "Bart",
            species: "Alligator Gar",
            length: 3,
            location: "Florida",
            food: "Fish"
        },
        {
            image: "images/arctic char.webp",
            name: "Arc",
            species: "Arctic Char",
            length: 5,
            location: "Alpine lakes",
            food: "Copepod species"
        },
        {
            image: "images/barry-the-baracuda-brad-thomas.jpg",
            name: "Thomas",
            species: "Baracuda",
            length: 6,
            location: "Western Atlantic Ocean",
            food: "Fish"
        },
        {
            image: "images/salmon.png",
            name: "Sal",
            species: "Salmon",
            length: 7,
            location: "North America",
            food: "Fish"
        },
        {
            image: "images/greater-amberjack-noaa.jpg",
            name: "Amber",
            species: "Amberjack",
            length: 8,
            location: "Atlantic and Pacific Ocean",
            food: "Crabs and squids"
        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}