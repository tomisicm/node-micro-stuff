export default class ResourceNotFoundError extends Error {
	constructor(resourceId, resourceType, ...params) {
		// Pass remaining arguments (including vendor specific ones) to parent constructor
		super(...params);

		this.errorType = "ResourceNotFoundError";
		this.resourceId = resourceId;
		this.resourceType = resourceType;
		this.date = new Date();
		if (this.resourceId) {
			this.message = `${this.resourceType} with ${this.resourceId} not found.`;
		} else {
			this.message = `${this.resourceType} not found.`;
		}

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ResourceNotFoundError);
		}
	}
}
