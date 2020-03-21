import { userLoader } from "./userLoader"

const createLoaders = (ctx) => {
  return {
    user: userLoader(ctx.user)
  }
}

export {
  createLoaders
}