/*eslint no-debugger: "warn"*/

const mutations = {
  showLoader(state) {
    state.count += 1

    if (state.visible) {
      return
    }
    state.visible = true
    // TODO
    // vm.$loading(true)
  },

  hideLoader(state) {
    if (state.count > 0) {
      state.count -= 1
    }
    if (state.count === 0) {
      state.visible = false
      // vm.$loading(false)
    }
  }
}

const state = () => ({ visible: false, count: 0 })

export default {
  state,
  mutations
}
