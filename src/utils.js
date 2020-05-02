export const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

export const toCamelCase = (str) => str[0].toUpperCase() + str.substr(1, str.length);

export const split = (separator) => (str) => str.split(separator);

export const map = (cb) => (arr) => arr.map(cb);

export const join = (value) => (arr) => arr.join(value);

export const trace = (label) => (value) => {
  console.log(`${label}:${value}`);
  return value;
};
