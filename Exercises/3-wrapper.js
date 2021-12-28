'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const typeName = types[i];
    const type = typeName.name.toLowerCase();
    if (typeof arg !== type) {
      throw new TypeError(`Arguments must be a ${type}!`);
    }
  }
  const res = fn(...args);
  const typeName = types[types.length - 1];
  const type = typeName.name.toLowerCase();
  if (typeof res !== type) {
    throw new TypeError(`Result must be a ${type}!`);
  }
  return res;
};

module.exports = { contract };
