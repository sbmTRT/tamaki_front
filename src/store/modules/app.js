export default {
    namespaced: true,
    state: {
        message: "",
        error: "",
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
