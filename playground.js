const BOV = require('./src/index')


//
// Playground development file
//

const barSchema = {
    name: 'string',
    address: 'string',
    drinks: 'object',
};

// Validates true
const barObj = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};

// Validates false
const barObjF = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [ // < No object
        'Heineken', 
    ]
};

try {
    BOV.validate(barObjF, barSchema)
} catch(error) {
    console.error(error)
}