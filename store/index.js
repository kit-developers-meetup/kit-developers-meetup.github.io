export const state = () => ({
  isMobileNavDisplayed: false
})

export const getters = {
  isMobileNavDisplayed: state => state.isMobileNavDisplayed
}

export const mutations = {
  hideMobileNav(state) {
    state.isMobileNavDisplayed = false
  },
  showMobileNav(state) {
    state.isMobileNavDisplayed = true
  }
}

export const actions = {
  toggleMobileNavDisplay({ commit, state }) {
    if (state.isMobileNavDisplayed) {
      commit('hideMobileNav')
    } else {
      commit('showMobileNav')
    }
  }
}
