# Bastards Object Validation

## Scope

- Easy-to-use lib to quickly validate objects
- Validates based on javascript data types
- Throws convenient error messages to quickly find your bug

## Running development

`npm install`
`npm run test`

## Running library locally

Clone the repository and run:

`node playground.js`

OR

`npm install --save ../[path to local bastards-object-validator]`

index.js
```
const BOV = require('bastards-object-validator')

const barSchema = {
    name: 'string',
    address: 'string'
};

// Validates true
const barObj = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow'
};

// Validates false
const barObjF = {
    name: 'Sjonnies',
    addresasdTypo: 'Centrum 001',
};

if(BOV.validate(barObj, barSchema)) {
    console.log('barObj is valid!')
}

try {
    BOV.validate(barObjF, barSchema)
} catch(error) {
    console.error(error)
}
```