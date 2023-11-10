<script setup>
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
                <div style="display: flex; justify-content: space-between">
                    <h5>AA Essentials</h5>
                    <div style="display: flex; justify-content: space-around; align-items: center; width: 100px">
                        <Button v-tooltip.bottom="'Unsave'" icon="pi pi-bookmark-fill" aria-label="UnSave" text plain /><span> 1,270</span>
                        <Button v-tooltip.bottom="'Share'" icon="pi pi-share-alt" aria-label="Share" text plain />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <video controls width="100%">
                    <source
                        src="https://awevideo.s3.amazonaws.com/video-22315925-0ff2d182b7d3eb7aa177dd18d08500ed.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231110T143353Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c1b0eb78aae78bdfd9cc6a1bf4a563ed7d483ad81b700623718852076aad964c"
                        type="video/mp4"
                    />
                    Download the
                    <a href="/media/cc0-videos/flower.mp4">MP4</a>
                    video.
                </video>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <TabView>
                    <TabPanel header="Overview">
                        <h4>Course details</h4>
                        <p style="color: var(--text-color-secondary)">5m 20s | Beginner | Updated: Jun 2023</p>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>

                        <h4>Skills covered</h4>
                        <div style="display: flex; justify-content: space-around; width: 250px">
                            <Chip label="Reports" />
                            <Chip label="Metrics" />
                            <Chip label="Integrations" />
                        </div>
                    </TabPanel>
                    <TabPanel header="Transcript">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Discussion">
                        <Panel toggleable>
                            <template #header>
                                <div class="flex align-items-center gap-2">
                                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
                                    <span class="font-bold">Amy Elsner</span>
                                </div>
                            </template>
                            <template #footer>
                                <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                                    <div class="flex align-items-center gap-2">
                                        <Button icon="pi pi-user" rounded text></Button>
                                        <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                                    </div>
                                    <span class="p-text-secondary">Updated 2 hours ago</span>
                                </div>
                            </template>
                            <template #icons>
                                <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                                    <span class="pi pi-cog"></span>
                                </button>
                                <Menu ref="menu" id="config_menu" :model="items" popup />
                            </template>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </Panel>
                        <br />
                        <Panel toggleable>
                            <template #header>
                                <div class="flex align-items-center gap-2">
                                    <Avatar image="https://avatars.githubusercontent.com/u/7874705?v=4" size="large" shape="circle" />
                                    <span class="font-bold">AV Coder</span>
                                </div>
                            </template>
                            <template #footer>
                                <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                                    <div class="flex align-items-center gap-2">
                                        <Button icon="pi pi-user" rounded text></Button>
                                        <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                                    </div>
                                    <span class="p-text-secondary">Updated 2 hours ago</span>
                                </div>
                            </template>
                            <template #icons>
                                <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                                    <span class="pi pi-cog"></span>
                                </button>
                                <Menu ref="menu" id="config_menu" :model="items" popup />
                            </template>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </Panel>
                    </TabPanel>
                </TabView>
            </div>
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
