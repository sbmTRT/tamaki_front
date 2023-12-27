// store/modules/app.js
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
        },
        actions: {
        async initLiff({ commit }) {
            try {
            await liff.init({
                liffId: import.meta.env.VITE_LIFF_ID,
            });
            commit("setMessage", "LIFF init succeeded.");
            } catch (e) {
            commit("setMessage", "LIFF init failed.");
            commit("setError", `${e}`);
            }
        },
        },
    };
