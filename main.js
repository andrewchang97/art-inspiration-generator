const animals = [
    'Lion', 'Elephant', 'Tiger', 'Giraffe', 'Kangaroo',
    'Penguin', 'Dolphin', 'Koala', 'Zebra', 'Panda',
    'Gorilla', 'Flamingo', 'Cheetah', 'Horse', 'Octopus',
    'Leopard', 'Rhino', 'Sloth', 'Camel', 'Jaguar',
    'Polar Bear', 'Koala', 'Hippopotamus', 'Arctic Fox', 'Cobra',
    'Squirrel', 'Ostrich', 'Chameleon', 'Peacock', 'Raccoon',
    'Orangutan', 'Salamander', 'Alpaca', 'Tarantula',
    'Chimpanzee', 'Gecko', 'Gazelle', 'Moose',
    'Hyena', 'Capybara', 'Platypus', 'Walrus'
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
    'Moon', 'Space Colony', 'Circus Tent', 'Underground Bunker', 'Library'
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
    'Paint Tube', 'Pirate Hat',
    'Coffee Mug', 'Sketchbook', 'Pencil Set', 'Watercolor Palette', 'Acrylic Paints',
    'Sculpting Clay', 'Easel Stand', 'Canvas Roll', 'Coloring Markers', 'Oil Paint Set',
    'Charcoal Pencils', 'Artist\'\s Apron', 'Pastel Chalks', 'Drawing Board', 'Art Journal',
    'Calligraphy Pen', 'Craft Knife', 'Ruler', 'Drafting Compass', 'Graphite Pencils',
    'Painting Brushes', 'Wooden Mannequin', 'Lightbox', 'Palette Knife', 'Ink Bottles',
    'Canvas Panels', 'Sketching Charcoal', 'Watercolor Brushes', 'Clay Tools', 'Chalkboard',
    'Color Mixing Guide', 'Drawing Paper', 'Stretched Canvas', 'Erasers', 'Oil Paint Medium',
    'Palette Cups', 'Sponges', 'Masking Tape', 'Fixative Spray', 'Canvas Stretching Pliers',
    'Color Wheel', 'Art Satchel', 'Sculpting Tools', 'Drafting Paper', 'Gouache Paints',
    'Acrylic Mediums', 'Drawing Easel', 'Stump and Tortillon Set', 'Tracing Paper', 'Painting Palette',
    'Artists\'\ Gloves', 'Linen Canvas', 'Blending Stumps', 'Canvas Varnish', 'Paper Cutter',
    'Perspective Grids', 'Staple Gun', 'Watercolor Paper Blocks', 'Plein Air Kit', 'Charcoal Paper',
    'Spray Fixative', 'Art Storage Box', 'Blending Brushes', 'Color Shapers', 'French Easel',
    'Encaustic Wax', 'Masonite Panels', 'Bamboo Brushes', 'Oil Brush Cleaner', 'Canvas Pad',
    'Manikin Hand', 'Gesso Primer', 'Foam Brushes', 'Bristle Brushes', 'Drafting T-Square',
    'Wooden Palette', 'Cotton Canvas Rolls', 'Chamois Cloth', 'Sculpture Armature', 'Drawing Mannequin',
    'Soft Pastels', 'Canvas Apron', 'Acrylic Brushes', 'Watercolor Ground', 'Oil Pastels',
    'Turpentine Solvent', 'Brush Holder', 'Acrylic Spray Varnish', 'Gel Medium', 'Landscape Brush Set',
    'Canvas Stretcher Bars', 'Printmaking Tools', 'Block Printing Ink', 'Sculpture Wire', 'Rag Paper',
    'Bristle Brushes', 'Soft Erasers', 'Oil Pastel Paper', 'Painting Varnish', 'Gel Pens'
]

const generateButton = document.querySelector('.generate');
generateButton.addEventListener('click', generateRandomly);

function generateRandomly() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];

    document.getElementById('animals').textContent = randomAnimal;
    document.getElementById('locations').textContent = randomLocation;
    document.getElementById('items').textContent = randomItem;
}