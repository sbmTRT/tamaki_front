// store/index.js
import { createStore } from 'vuex'
import { app } from './modules';

export default createStore({
    modules: {
        app,
    },
});
