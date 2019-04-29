'use strict';

const Schema = require('./Schema')
const { ValidationError } = require('./Errors')

/**
 * Responsible for validating an object based on given Schema
 *
 * @class ObjectValidator
 */
class ObjectValidator {

    /**
     * Validates given objects. Returns true on success, throws error otherwise
     *
     * @static
     * @param {Object} object
     * @param {Schema} schema
     * @returns {boolean}
     * @memberof ObjectValidator
     */
    static validate(object, schema) {
        if(!(schema instanceof Schema)) {
            throw new ValidationError('Provided schema is not of class Schema')
        }

        //get raw schema object
        schema = schema.get()

        //iterate over passed object and check for non-existant keys and wrong data types
        Object.keys(object).forEach(schemaKey => {
            if(schema[schemaKey] === undefined) throw new ValidationError(`found nonexistant schema key '${schemaKey}' on object`)
                      
            const expectedType = schema[schemaKey]
            const literalType = typeof object[schemaKey]
            //arrays are objects when type checking, convert to array if necessary 
            const givenType = literalType !== 'object'
                                ? literalType
                                : Array.isArray(object[schemaKey])
                                ? 'array'
                                : 'object'

            if (expectedType !== givenType) {
                throw new ValidationError(`wrong type input at key '${schemaKey}', received: '${givenType}', expected: '${expectedType}'`)
            }
        })

        //iterate over schema object and check for non-existant keys and wrong data types
        Object.keys(schema).forEach(schemaKey => {
            if(object[schemaKey] === undefined) throw new ValidationError(`missing required field '${schemaKey}' on object`)
        })

        return true
    }
}

module.exports = ObjectValidator