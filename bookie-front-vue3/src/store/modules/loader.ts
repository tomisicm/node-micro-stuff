/*eslint no-debugger: "warn"*/

type State = {
  visible: boolean,
  count: number
}

const mutations = {
  showLoader(state: State) {
    state.count += 1

    if (state.visible) {
      return
    }
    state.visible = true
    // TODO
    // vm.$loading(true)
  },

  hideLoader(state: State) {
    if (state.count > 0) {
      state.count -= 1
    }
    if (state.count === 0) {
      state.visible = false
      // vm.$loading(false)
    }
  }
}

const state = (): State => ({ visible: false, count: 0 })

export default {
  state,
  mutations
}
