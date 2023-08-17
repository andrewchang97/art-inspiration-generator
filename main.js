const animals = [
    'Lion', 'Elephant', 'Tiger', 'Giraffe', 'Kangaroo',
    'Penguin', 'Dolphin', 'Koala', 'Zebra', 'Panda',
    'Gorilla', 'Flamingo', 'Cheetah', 'Horse', 'Octopus',
    'Leopard', 'Rhino', 'Sloth', 'Camel', 'Jaguar',
    'Polar Bear', 'Koala', 'Hippopotamus', 'Arctic Fox', 'Cobra',
    'Squirrel', 'Ostrich', 'Chameleon', 'Peacock', 'Raccoon',
    'Orangutan', 'Salamander', 'Alpaca', 'Tarantula',
    'Chimpanzee', 'Gecko', 'Gazelle', 'Moose',
    'Hyena', 'Capybara', 'Platypus', 'Walrus', 'Slime', 'Spirits',
    'Ghost', 'Mushroom', 'Fairies', 'Mouse', 'Cat', 'Dog', 'Rabbit', 
    'Duck', 'Bear', 'Pokemon', 'Favorite Anime Character'
]
const locations = [
    'Forest', 'Beach', 'City', 'Mountains', 'Space',
    'Underwater', 'Desert', 'Jungle', 'Castle', 'Countryside',
    'Cave', 'Waterfall', 'Volcano', 'Island', 'Swamp',
    'Farm', 'Ruins', 'Tundra', 'Village', 'Canyon',
    'Marketplace', 'Cliff', 'Lighthouse', 'Meadow', 'Temple',
    'Savannah', 'Oasis', 'Cottage', 'Harbor', 'Glacier',
    'Subway', 'Carnival', 'Skyscraper', 'Pirate Ship', 'Rainforest',
    'Cathedral', 'Amusement Park', 'Space Station', 'Haunted House', 'Ski Resort',
    'Moon', 'Space Colony', 'Circus Tent', 'Underground Bunker', 'Library',
    'Cozy Living Room', 'Messy Bedroom', 'Quaint Cafe', 'Overgrown Train Station', 'Floating Castle',
    'Movie Inspired Scene', 'Pallet Town'
]
const items = [
    'Umbrella', 'Book', 'Telescope', 'Camera', 'Palette',
    'Guitar', 'Easel', 'Compass', 'Map', 'Sword',
    'Cupcake', 'Lantern', 'Backpack', 'Hourglass', 'Key',
    'Binoculars', 'Paintbrush', 'Quill', 'Potion', 'Scroll',
    'Treasure Chest', 'Shield', 'Flower Bouquet', 'Hourglass', 'Microscope',
    'Magnifying Glass', 'Candle', 'Pocket Watch', 'Feather', 'Crystal Ball',
    'Crown', 'Mask', 'Globe', 'Treasure Map', 'Ink Bottle',
    'Music Sheet', 'Scepter', 'Spyglass', 'Wand', 'Mechanical Gear',
    'Mystical Amulet', 'Pocket Knife', 'Stethoscope', 'Golden Key', 'Puzzle Box',
    'Paint Tube', 'Pirate Hat', 'Coffee Mug', 'Sketchbook', 'Cheese', 'Magic Wand', 'Flower Bouquet',
    'Stuffed Animal', 'Cake', 'Train', 'Toys', 'Spatula', 'Bicycle', 'Hot Air Balloon', 'Lollipop', 'Star-shaped Sunglasses',
    'Jellyfish Lanterns', 'Mushroom Teapot', 'Flower Crown Wreath'
]

// const generateButton = document.querySelector('.generate');
// generateButton.addEventListener('click', generateRandomly);

function generateRandomly() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];

    document.getElementById('animals').textContent = randomAnimal;
    document.getElementById('locations').textContent = randomLocation;
    document.getElementById('items').textContent = randomItem;
}
const generateButton = document.querySelector('.generate');
generateButton.addEventListener('click', startShuffle);

function startShuffle() {
    // Disable the button during the shuffle to prevent multiple clicks
    generateButton.disabled = true;

    const shuffleDuration = 2000; // Duration of the shuffle in milliseconds
    const shuffleInterval = 100; // Interval between updates during the shuffle
    let shuffleTimer;

    const animalsElement = document.getElementById('animals');
    const locationsElement = document.getElementById('locations');
    const itemsElement = document.getElementById('items');

    let shuffleCount = 0;

    shuffleTimer = setInterval(() => {
        shuffleCount++;

        // Shuffle the elements
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const randomItem = items[Math.floor(Math.random() * items.length)];

        animalsElement.textContent = randomAnimal;
        locationsElement.textContent = randomLocation;
        itemsElement.textContent = randomItem;

        // Stop the shuffle after shuffleDuration
        if (shuffleCount * shuffleInterval >= shuffleDuration) {
            clearInterval(shuffleTimer);

            // Re-enable the button after the shuffle is complete
            generateButton.disabled = false;
        }
    }, shuffleInterval);
}
