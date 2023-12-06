// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        formData: null,
    },
    mutations: {
        setFormData(state, data) {
            state.formData = data;
        },
    },
});

export default store;
