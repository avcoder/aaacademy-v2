<script setup></script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="text-700 text-center">
                    <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
                    <div class="text-900 font-bold text-5xl mb-3">Join Our AA Community</div>
                    <div class="text-700 text-2xl mb-5">Gain knowledge through the collection of conversation topics and frequently asked questions.</div>
                    <Button label="Join Now" icon="pi pi-discord" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
                </div>
                <Panel toggleable>
                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <Avatar image="https://www.primefaces.org/showcase/javax.faces.resource/images/avatar/elwinsharvill.png.xhtml?ln=demo" size="large" shape="circle" />
                            <span class="font-bold">Maud Fancy</span>
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
                        Help me I'm new to AgencyAnalytics.. how do I best get started learning about all of the cool features this platform has to offer?
                    </p>
                </Panel>
                <Panel toggleable>
                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <Avatar image="https://www.primefaces.org/showcase/javax.faces.resource/images/avatar/ivanmagalhaes.png.xhtml?ln=demo" size="large" shape="circle" />
                            <span class="font-bold">Jack Benimble</span>
                        </div>
                    </template>
                    <template #footer>
                        <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                            <div class="flex align-items-center gap-2">
                                <Button icon="pi pi-user" rounded text></Button>
                                <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                            </div>
                            <span class="p-text-secondary">Updated 1 hours ago</span>
                        </div>
                    </template>
                    <template #icons>
                        <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                            <span class="pi pi-cog"></span>
                        </button>
                        <Menu ref="menu" id="config_menu" :model="items" popup />
                    </template>
                    <p class="m-0">
                        Hey Maud!  Welcome to our awesome community!  You're going to love using AgencyAnalytics!
                        I found the best way is to check out some AgencyAnalytics Academy learning videos.</p>
                </Panel>
                <Panel toggleable>
                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <Avatar image="https://www.primefaces.org/showcase/javax.faces.resource/images/avatar/elwinsharvill.png.xhtml?ln=demo" size="large" shape="circle" />
                            <span class="font-bold">Maud Fancy</span>
                        </div>
                    </template>
                    <template #footer>
                        <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                            <div class="flex align-items-center gap-2">
                                <Button icon="pi pi-user" rounded text></Button>
                                <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                            </div>
                            <span class="p-text-secondary">Updated 23 mins ago</span>
                        </div>
                    </template>
                    <template #icons>
                        <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                            <span class="pi pi-cog"></span>
                        </button>
                        <Menu ref="menu" id="config_menu" :model="items" popup />
                    </template>
                    <p class="m-0">
                        Oh that's really cool... Thanks Jack!
                    </p>
                </Panel>
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
