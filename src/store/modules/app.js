export default {
    namespaced: true,
    state: {
        message: "",
        error: "",
    },
    getters: {
        getMessage(state, message) {
            return state.message;
        },
        getError(state, error) {
            return state.error;
        },
    },
    mutations: {
        setMessage(state, message) {
        state.message = message;
        },
        setError(state, error) {
        state.error = error;
        },
    }
};
