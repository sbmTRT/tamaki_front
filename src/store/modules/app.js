export default {
    namespaced: true,
    state: {
        message: "",
        error: "",
        info: "",
        info_id: "",
    },
    getters: {
        getMessage(state, message) {
            return state.message;
        },
        getError(state, error) {
            return state.error;
        },
        getProfile(state, info) {
            return state.info;
        }
    },
    mutations: {
        setMessage(state, message) {
        state.message = message;
        },
        setError(state, error) {
        state.error = error;
        },
        setProfile(state, info) {
        state.info = info;
        }
    }
};
