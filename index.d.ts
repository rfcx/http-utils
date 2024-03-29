declare module '@rfcx/http-utils' {
  class Conversion {
    src: any
    target: any
    property: string
    value: any
    conversions: any[]
    required: boolean
    defaultValue: any
    execute(): void
    default(def: any): this
    optional(): this
    throwError(message: string): void
    toFloat(): this
    minimum(a: number): this
    maximum(b: number): this
    minLength(a: string): this
    maxLength(b: string): this
    nonEmpty(): this
    toUuid(): this
    toLatitude(): this
    toLongitude(): this
    toMoment(tz: string): this
    toMomentUtc(): this
    toDateString(): this
    toTimeInterval(): this
    toAggregateFunction(): this
    toInt(): this
    toNonNegativeInt(): this
    toString(): this
    toLowerCase(): this
    toUpperCase(): this
    trim(): this
    objToString(): this
    toBoolean(): this
    toArray(): this
    toIntArray(): this
    toFloatArray(): this
    nonEmptyArrayItem(): this
    isObject(): this
    isValidTimezone(): this
    isEqualToAny(values: any[]): this
    isPassingRegExp(exp: RegExp, customErrMes?: string)
  }
  interface converterOptions {
    camelize?: boolean
  }
  class Converter {
    constructor(validatedObject: any, transformedObject: any, options?: converterOptions)
    validatedObject: any
    currentValue: any
    currentProperty: string
    transformedObject: any
    conversions: any[]
    options: converterOptions
    convert(property: string): Conversion
    validate(): any
  }
  function httpError (req: Object, res: Object, code: number, context: string, mes: string): void
  function httpErrorHandler (req: Object, res: Object, fallbackMessage: string): (err: ForbiddenError | EmptyResultError | ValidationError | UnauthorizedError | Error) => {}
  function mapAxiosErrorToCustom (err: any): never
  class ForbiddenError {
    constructor(message?: string)
    message: string
    name: string
  }
  class EmptyResultError {
    constructor(message?: string)
    message: string
    name: string
  }
  class ValidationError {
    constructor(message?: string)
    message: string
    name: string
  }
  class UnauthorizedError {
    constructor(message?: string)
    message: string
    name: string
  }
}
