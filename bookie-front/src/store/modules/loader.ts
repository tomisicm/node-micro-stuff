type loader = {
  visible: boolean;
  count: number;
}

const mutations = {
  showLoader(state: loader, vm: Vue): void {
    state.count += 1

    if (state.visible) {
      return
    }
    state.visible = true
    vm.$loading(true)
  },

  hideLoader(state: loader, vm: Vue): void {
    if (state.count > 0) {
      state.count = state.count - 1
    }
    if (state.count === 0) {
      state.visible = false
      vm.$loading(false)
    }
  }
}

const state = () => ({ visible: false, count: 0 })

export default {
  state,
  mutations
}
