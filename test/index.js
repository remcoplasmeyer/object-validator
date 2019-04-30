/*
 * TODO:
    - unit test Schema
    - check throw types
 */

const BOV = require('../src/index')
const SchemaValidator = require('../src/SchemaValidator')
const expect = require('chai').expect

const barSchema = {
  name: 'string',
  address: 'string',
  drinks: 'object'
}

const barSchemaF = {
  name: 'string',
  address: 'stringTypoSimulator',
  drinks: 'object'
}

// Validates true
const barObj = {
  name: 'Jimmys drinks',
  address: 'Somewhere over the rainbow',
  drinks: {
    beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard']
  }
}

// Validates false
const barObjF = {
  name: 'Sjonnies',
  address: 'Centrum 001',
  drinks: [ // < No object
    'Heineken'
  ]
}

const carSchema = {
  brand: 'string',
  type: 'string',
  milage: 'number',
  extras: 'array'
}

// Validates true
const carObj = {
  brand: 'Mazda',
  type: 'MX5 NB 1.8',
  milage: 199999.99,
  extras: [
    '2001 Special Edition'
  ]
}

// Validates false
const carObjF = {
  brand: 'BMW',
  type: '335',
  milage: '100000', // < No number
  extras: [
    'LCI',
    'KW Coilovers'
  ]
}

const personSchema = {
  name: 'string',
  age: 'number',
  siblings: 'array',
  metaData: 'object',
  active: 'boolean'
}

// Validates true
const personObj = {
  name: 'James',
  age: 25,
  siblings: ['Johnnathan'],
  metaData: {},
  active: true
}

// Validates false
const personObjF = {
  name: 'James',
  age: 25,
  active: true
}

describe('Bastards Objects Validator', function () {
  it('validates bars valid example', function () {
    expect(
      BOV.validate(barObj, barSchema)
    ).to.equal(true)
  })

  it('validates bars invalid example', function () {
    expect(
      () => BOV.validate(barObjF, barSchema)
    ).to.throw()
  })

  it('validates bars invalid scheme example', function () {
    expect(
      () => BOV.validate(barObjF, barSchemaF)
    ).to.throw()
  })

  it('validates cars valid example (pass own Schema object)', function () {
    expect(
      BOV.validate(carObj, new SchemaValidator(carSchema))
    ).to.equal(true)
  })

  it('validates cars invalid example', function () {
    expect(
      () => BOV.validate(carObjF, carSchema)
    ).to.throw()
  })

  it('validates persons valid example', function () {
    expect(
      BOV.validate(personObj, personSchema)
    ).to.equal(true)
  })

  it('validates persons invalid example (missing required fields)', function () {
    expect(
      () => BOV.validate(personObjF, personSchema)
    ).to.throw()
  })
})
