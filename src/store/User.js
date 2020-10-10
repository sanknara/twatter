export const UserModule = {
    namespace: true,
    state: {
        user: null,
    },

    // Functions that effect the STATE
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    // Functions that call throughout our app that call mutations
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    },

}