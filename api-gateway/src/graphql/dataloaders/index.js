import { userLoader } from "./userLoader"

const createLoaders = (ctx) => {
  // console.log(ctx.user)

  return {
    user: userLoader
  }
}

export {
  createLoaders
}