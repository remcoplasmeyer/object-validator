'use strict'

const allTypes = require('./types')
const { SchemaError } = require('./Errors')

/*
 * Responsible for validating a given schema object on allowed types
 *
 * @class SchemaValidator
 */
class SchemaValidator {
  /**
     * Creates an instance of Schema with given schemaObject - validates schema on construction
     * @param {Object} schemaObject
     * @memberof Schema
     */
  constructor (schemaObject) {
    // holds original schema object
    this._schema = schemaObject
    this.validate()
  }

  set (schemaObject) {
    this._schema = schemaObject
    this.validate()
  }

  get () {
    return this._schema
  }

  // check if schema does not contain an unknown data type
  validate () {
    Object.values(this._schema).forEach(fieldKey => {
      if (!allTypes.hasOwnProperty(fieldKey)) {
        throw new SchemaError(`Schema invalid key '${fieldKey}'`)
      }
    })
  }
}

module.exports = SchemaValidator
