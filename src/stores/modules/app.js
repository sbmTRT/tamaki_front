export default {
    namespaced: true,
    state: {
        message: "",
        error: "",
        info: "",
        info_id: "",
        images: [],
        uploadimages: []
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
        getImages(state) {
            return state.images;
        },
        getUploadImages(state) {
            return state.uploadimages;
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
        },
        setImages(state, images) {
            state.images = images;
        },
        setUploadImages(state, uploadimages) {
            state.uploadimages = uploadimages;
        }
    }
};
