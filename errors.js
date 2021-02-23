class ForbiddenError extends Error {
  constructor (message) {
    super(message)
    this.message = message
    this.name = 'ForbiddenError'
  }
}

class EmptyResultError extends Error {
  constructor (message) {
    super(message)
    this.message = message
    this.name = 'EmptyResultError'
  }
}

class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.message = message
    this.name = 'ValidationError'
  }
}

class UnauthorizedError extends Error {
  constructor (message) {
    super(message)
    this.message = message
    this.name = 'UnauthorizedError'
  }
}

module.exports = {
  ForbiddenError,
  EmptyResultError,
  ValidationError,
  UnauthorizedError
}
