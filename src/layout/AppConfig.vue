<script setup>
import Sidebar from 'primevue/sidebar';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
    simple: {
        type: Boolean,
        default: false
    }
});
const visible = ref(false);

const onConfigButtonClick = () => {
    visible.value = !visible.value;
};

const shouldShowListButton = () => {
    return router.currentRoute.value.name === 'learning';
};
</script>

<template>
    <button v-if="shouldShowListButton()" class="layout-config-button p-link" type="button" @click="onConfigButtonClick()">
        <i class="pi pi-list"></i>
    </button>

    <Sidebar v-model:visible="visible" position="right" :transitionOptions="'.3s cubic-bezier(0, 0, 0.2, 1)'" class="layout-config-sidebar w-20rem">
        <Accordion :activeIndex="0">
            <AccordionTab header="Introduction">
                <DataTable :value="['hi', 'bye']">
                    <Column field="code" header="Video #"></Column>
                </DataTable>
            </AccordionTab>
            <AccordionTab header="Reporting">
                <DataTable :value="products">
                    <Column field="code" header="Video #"></Column>
                </DataTable>
            </AccordionTab>
            <AccordionTab header="Integrations">
                <DataTable :value="products">
                    <Column field="code" header="Video #"></Column>
                </DataTable>
            </AccordionTab>
            <AccordionTab header="Account Management">
                <DataTable :value="products">
                    <Column field="code" header="Video #"></Column>
                </DataTable>
            </AccordionTab>
        </Accordion>
    </Sidebar>
</template>

<style lang="scss" scoped></style>
