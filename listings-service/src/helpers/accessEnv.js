// accesses a variable inside of process.env, throwing an error if it is not found
// always run this methods in advance

const cache = {};

const accessEnv = (key, defaultValue) => {
    if (!(key in process.env)) {
        if (defaultValue) return defaultValue;
        throw new Error(`${key} not found in process.env!`);
    }

    if (cache[key]) return cache[key];

    cache[key] = process.env[key];

    return process.env[key];
};

export default accessEnv;