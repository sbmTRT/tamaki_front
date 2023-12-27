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
        },
        getProfileID(state, info_id) {
            return state.info_id;
        },
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
        },
        setProfileID(state, info_id) {
        state.info_id = info_id;
        },
    }
};
