<script setup>
import ProductService from '@/service/ProductService';
import { ref, onBeforeMount } from 'vue';

const videos = ref(null);

const productService = new ProductService();

onBeforeMount(() => {
    productService.getVideos().then((data) => (videos.value = data));
});

const getProgress = (value) => {
    return value ? value : Math.floor(Math.random() * 100);
};

const formatDate = ({ item_date_updated, item_date_created }) => {
    const dateRaw = item_date_updated ?? item_date_created;
    const dateSafe = new Date(dateRaw.split(' ')[0]);

    return dateSafe.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
};

const getImage = (url) => {
    return url ?? '/layout/images/aaDefault.png';
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="row" style="display: flex; gap: 10px; justify-content: center">
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="English" class="w-full md:w-8rem" />
                    <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Type" :maxSelectedLabels="3" class="w-full md:w-7rem" />
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Level" class="w-full md:w-8rem" />
                    <Button label="Reset" severity="info" text />
                </div>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="col-12" v-if="!videos">
            <div class="border-round border-1 surface-border p-4 surface-card">
                <ul class="m-0 p-0 list-none">
                    <li class="mb-3">
                        <div class="flex">
                            <Skeleton width="230px" height="130px" class="mr-2"></Skeleton>
                            <div class="align-self-center" style="flex: 1">
                                <Skeleton width="15%" class="mb-2"></Skeleton>
                                <Skeleton width="100%" class="mb-4"></Skeleton>
                                <Skeleton width="80%" class="mb-2"></Skeleton>
                                <Skeleton width="25%" class="mb-2"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li class="mb-3">
                        <div class="flex">
                            <Skeleton width="230px" height="130px" class="mr-2"></Skeleton>
                            <div class="align-self-center" style="flex: 1">
                                <Skeleton width="15%" class="mb-2"></Skeleton>
                                <Skeleton width="100%" class="mb-4"></Skeleton>
                                <Skeleton width="80%" class="mb-2"></Skeleton>
                                <Skeleton width="25%" class="mb-2"></Skeleton>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="flex">
                            <Skeleton width="230px" height="130px" class="mr-2"></Skeleton>
                            <div class="align-self-center" style="flex: 1">
                                <Skeleton width="15%" class="mb-2"></Skeleton>
                                <Skeleton width="100%" class="mb-4"></Skeleton>
                                <Skeleton width="80%" class="mb-2"></Skeleton>
                                <Skeleton width="25%" class="mb-2"></Skeleton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12" v-else>
            <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly; width: 100%">
                <Card style="width: 270px" v-for="video in videos" :key="video.item_id">
                    <template #header>
                        <img alt="user header" :src="getImage(video.item_image)" style="height: 140px; width: 270px" />
                    </template>
                    <template #content>
                        <router-link to="/learning">
                            <Button icon="pi pi-youtube" label="Watch" />
                        </router-link>
                    </template>
                    <template #footer>
                        <h5>{{ video.item_title }}</h5>
                    </template>
                </Card>
            </div>

            <!-- <div class="card">
                <Card v-for="video in videos" :key="video.item_title">
                    <template #title> {{ video.item_title }} </template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                    </template>
                </Card>
            </div> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
::v-deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
