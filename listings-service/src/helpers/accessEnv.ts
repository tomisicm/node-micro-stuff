
const cache: { [key:string]: any } = {}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const accessEnv = (key:string, defaultValue?: any): any => {
	if (!(key in process.env)) {
		if (defaultValue) return defaultValue
		throw new Error(`${key} not found in process.env!`)
	}

	if (cache[key]) {
		return cache[key]
	} else {
		cache[key] = process.env[key]
		return process.env[key]
	}
}

export default accessEnv
