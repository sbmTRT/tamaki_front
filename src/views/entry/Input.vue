
<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const store = useStore();

const info = store.getters['app/getProfile'];
const message = store.getters['app/getMessage']

const uploadedImage = ref(null);

const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        uploadedImage.value = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        };
    }
};;

const redirectTo = (routePath) => {
    router.push(routePath);
};
</script>

<style scoped>
/* View-specific styles go here */
</style>


<template>
<body class="container-sm">
    <form>
        <div class="card">
            <div class="card-header bg-success text-white">
                登録申込
            </div>
            <div class="card-body">
                <div class="card mt-2">
                    <div class="card-body">
                        <label class="text-success mb-4"> 申込者 </label>
                            <div class="form-group mb-4">
                                <label>氏名</label>
                                <input type="text" class="form-control" v-model="info">
                            </div>
                            <div class="form-group mb-4">
                                <label>住所</label>
                                <input type="text" class="form-control" v-model="message">
                            </div>
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-body">
                        <label class="text-success mb-4"> 対象物件 </label>
                            <div class="form-group mb-4">
                                <button type="button" class="btn btn-success shadow-sm mx-2" @click="redirectTo('/menu')">登録カード入力</button>
                                <button type="button" class="btn btn-secondary shadow-sm">未入力</button>
                            </div>
                        <label class="text-success"> 契約交渉の方法 </label><br>
                        <label class="text-success"> . </label><br>
                        <label class="text-success"> . </label><br>
                        <label class="text-success"> . </label><br>
                        <label class="text-success"> . </label>
                    </div>
                </div>      <!-- File Upload Section -->
                <div class="card mt-2">
                    <div class="card-body">
                        <label class="text-success mb-4">アップロード画像</label>
                        <div class="form-group mb-4">
                            <input type="file" @change="handleFileChange" />
                            <p v-if="uploadedImage">Uploaded Image Details:</p>
                            <p v-if="uploadedImage">File Name: {{ uploadedImage.name }}</p>
                            <p v-if="uploadedImage">File Size: {{ uploadedImage.size }} bytes</p>
                            <p v-if="uploadedImage">File url: {{ uploadedImage.url }}</p>
                            <img :src="uploadedImage && uploadedImage.url" alt="Uploaded" v-if="uploadedImage" />
                        </div>
                    </div>
                </div>
                <div class="form-group mt-4  d-grid gap-2 col-10 mx-auto">
                    <button type="button" class="form-control btn btn-success shadow-sm  mb-3" data-bs-toggle="modal" data-bs-target="#myModal">登録</button>
                </div>
                <div class="form-group d-grid gap-2 col-10 mx-auto">
                    <button type="button" class="form-control btn btn-secondary shadow-sm" @click="redirectTo('/menu')">戻る</button>
                </div>
            </div>
        </div>
        <!-- The Modal -->
        <div class="modal" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            ＜注意＞。玉城町では、情報の。。。。。
                        </div>
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something">
                        <label class="form-check-label">上記を確認しました。</label>
                    </div>
                    <div class="col-6 mx-auto mt-5">
                        <button type="button" class="form-control btn btn-success btn-block" data-bs-dismiss="modal">承認</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </form>
</body>
</template>