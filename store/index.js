export const state = () => ({
    authenticated: false
})

export const mutations = {
    login(state) {
        state.authenticated = true
    },
}
export const actions = {
    login({ commit }) {
        commit('login')
    }
}