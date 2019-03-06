export const state = () => ({
  isSideNavDisplayed: false
})

export const getters = {
  isSideNavDisplayed: state => state.isSideNavDisplayed
}

export const mutations = {
  hideSideNav(state) {
    state.isSideNavDisplayed = false
  },
  showSideNav(state) {
    state.isSideNavDisplayed = true
  }
}

export const actions = {
  toggleSideNavDisplay({ commit, state }) {
    if (state.isSideNavDisplayed) {
      commit('hideSideNav')
    } else {
      commit('showSideNav')
    }
  }
}
