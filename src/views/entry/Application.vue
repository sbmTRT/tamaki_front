<template>
<body class="container-sm">
    <form>
        <div class="card">
            <div class="card-header bg-success text-white">
                保存された画像一覧
            </div>
            <div class="card-body">
                <div v-for="(image, index) in uploadedImages" :key="index" class="col-sm-6 mb-4">
                    <img :src="image.url" :alt="'Uploaded Image ' + (index + 1)" class="uploaded-image w-100" />

                    <!-- Download button for each image -->
                    <a :href="image.url" :download="'image_' + (index + 1) + '.jpg'">
                        <button type="button" class="form-control btn btn-warning shadow-sm mx-auto rounded-0">ダウンロード</button>
                    </a>
                </div>
                <div class="col-sm-6 mx-auto mb-4">
                    <button type="button" class="btn btn-success shadow-sm" v-if="uploadedImages.length" @click="downloadAllImages()">すべてダウンロード</button>
                    <button type="button" class="btn btn-danger shadow-sm mx-2" v-if="uploadedImages.length" @click="deleteAllImages()">すべてクリア</button><br>
                    <button type="button" class="form-control btn btn-secondary shadow-sm mt-4" @click="redirectTo('/input')">戻る</button><br>
                </div>
            </div>
        </div>
    </form>
</body>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from 'vuex';
import JSZip from 'jszip';

const router = useRouter();
const store = useStore();
const uploadedImages = ref(store.getters['app/getImages']);

const redirectTo = (routePath) => {
    router.push(routePath);
};
const downloadAllImages = () => {
    if (uploadedImages.value.length > 0){
        const zip = new JSZip();
        uploadedImages.value.forEach((image, index) => {
            const fileName = `image_${index + 1}.jpg`;
            zip.file(fileName, image.blob, { binary: true });
        });
        zip.generateAsync({ type: 'blob' })
            .then((content) => {
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(content);
            downloadLink.download = 'all_images.zip';
            downloadLink.click();
            });
    }else{
        alert(`アップロードされた画像はないです 。`);
    }

};
const deleteAllImages = () => {
    uploadedImages.value = [];
    // Reset the Vuex store
    store.commit('app/setImages', uploadedImages.value);
};
</script>