function isObject (o) {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function'
}

function toCamelCase (str) {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })
}

function toCamelObject (o, maxLevels) {
  if (maxLevels === 0) {
    return o
  }
  if (isObject(o)) {
    const n = {}
    Object.keys(o)
      .forEach((k) => {
        n[toCamelCase(k)] = toCamelObject(o[k], maxLevels ? maxLevels - 1 : undefined)
      })
    return n
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return toCamelObject(i, maxLevels)
    })
  }
  return o
}

module.exports = {
  toCamelCase,
  toCamelObject
}
