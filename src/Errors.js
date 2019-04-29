// TODO: split up into ./errors ???

/**
 * Thrown when invalidating an object
 *
 * @class ValidationError
 * @extends {Error}
 */
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

/**
 * Thrown when invalidating a schema
 *
 * @class SchemaError
 * @extends {Error}
 */
class SchemaError extends Error {
    constructor(message) {
        super(message); 
        this.name = "SchemaError";
    }
}

module.exports = { ValidationError, SchemaError }