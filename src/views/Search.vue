<script setup>
import ProductService from '@/service/ProductService';
import { ref, onBeforeMount } from 'vue';

const videos = ref(null);

const productService = new ProductService();

onBeforeMount(() => {
    productService.getVideos().then((data) => (videos.value = data));
});

// const formatDate = (value) => {
//     return value.toLocaleDateString('en-US', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     });
// };
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
            <DataView :value="videos">
                <template #list="slotProps">
                    <div class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                            <img class="shadow-2 block xl:block mx-auto border-round" style="height: 130px; width: 230px" :src="`/layout/images/aaDefault.png`" :alt="slotProps.data.item_title" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <span>{{ slotProps.data.item_type.toUpperCase() }}</span>
                                    <div class="text-2xl font-bold text-900 margin-top-small">{{ slotProps.data.item_title }}</div>
                                    <ProgressBar value="50"></ProgressBar>
                                    <!-- <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating> -->
                                    <!-- <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ slotProps.data.category }}</span>
                                        </span>
                                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                    </div> -->
                                </div>
                                <!-- <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>

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
