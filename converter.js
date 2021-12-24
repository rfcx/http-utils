const Conversion = require('./conversion')
const { toCamelObject } = require('./formatters/string-cases')
const { ValidationError, ForbiddenError, EmptyResultError } = require('./errors')

class Converter {
  constructor (validatedObject, transformedObject, options = {}) {
    if (validatedObject instanceof Converter) {
      validatedObject = validatedObject.validatedObject
    }
    this.validatedObject = validatedObject
    this.currentValue = null
    this.currentProperty = null
    this.transformedObject = transformedObject || {}
    this.conversions = []
    this.options = {
      camelize: false,
      ...options
    }
  };

  convert (property) {
    const conversion = new Conversion(this.validatedObject, property, this.transformedObject)
    this.conversions.push(conversion)
    return conversion
  }

  validate () {
    return Promise.resolve()
      .then(() => {
        const exceptions = []
        for (var conversion of this.conversions) {
          try {
            conversion.execute()
          } catch (e) {
            exceptions.push(e.message)
          }
        }
        if (exceptions.length === 0) {
          return this.options.camelize ? toCamelObject(this.transformedObject, 1) : this.transformedObject
        } else {
          throw new ValidationError(`Validation errors: ${exceptions.join('; ')}.`)
        }
      })
  }
}

module.exports = Converter
