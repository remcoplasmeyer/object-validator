
const ObjectValidator = require('./ObjectValidator');
const Schema = require('./Schema');

/**
 * Bastards Object Validation Class
 * 
 * @class BOV
 */
class BOV {
    /**
     *
     *
     * @static
     * @param {Object} object object to validate
     * @param {Object||Schema} schemaObject schema object to validate from
     * @returns {boolean}
     * @memberof BOV
     */
    static validate(object, schemaObject) {
        // schemaObject can also be passed as a Schema object to pass reconstructing
        const schema = (schemaObject instanceof Schema) ? schemaObject : this.Schema(schemaObject)
        return ObjectValidator.validate(object, schema)
    }

    /**
     * Static helper to quickly create a Schema
     * 
     * @static
     * @param {*} schemaObject schema object to validate from
     * @returns {Schema}
     * @memberof BOV
     */
    static Schema(schemaObject) {
        return new Schema(schemaObject)
    }
}
module.exports = BOV